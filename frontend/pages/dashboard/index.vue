<template>
    <div>
 
    <div class="container div-is-left">
        <div class="columns">
            <div class="column is-3">
                <aside class="menu is-hidden-mobile">
                    <p class="menu-label">
                        General
                    </p>
                    <ul class="menu-list">
                        <li><nuxt-link to="/dashboard" exact>Dashboard</nuxt-link></li>
                        <li><nuxt-link to="/projects">My Projects</nuxt-link></li>
                        <li><nuxt-link to="/projects/createproject" >Create a project</nuxt-link></li>
                    </ul>
                    <p class="menu-label">
                        Administration
                    </p>
                    <ul class="menu-list">
                        <li><nuxt-link to="/company">My Companies</nuxt-link></li>
                        <li><nuxt-link to="/company/createcompany" >Add company</nuxt-link></li>
                    </ul>
                    <p class="menu-label">
                        Upgrade
                    </p>
                    <ul class="menu-list">
                        <li><nuxt-link to="/transactions" >Add subscription</nuxt-link></li>
                    </ul>
                </aside>
            </div>
            <div class="column is-9 margin-left-2rem">
                <section class="hero is-info welcome is-small">
                    <div class="hero-body">
                        <div class="container div-is-left">
                            <h1 class="title">
                                Hello.
                            </h1>
                        </div>
                    </div>
                </section>
                <section class="info-tiles">
                    <div class="tile is-ancestor has-text-centered">
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">439k</p>
                                <p class="subtitle">Projects</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">59k</p>
                                <p class="subtitle">Scans</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">3.4k</p>
                                <p class="subtitle">Entities</p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child box">
                                <p class="title">19</p>
                                <p class="subtitle">Vulnerabilities</p>
                            </article>
                        </div>
                    </div>
                </section>
                <div class="columns">
                    <div class="column is-6">
                        <div class="card events-card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Recent Projects
                                </p>
                                <a href="#" class="card-header-icon" aria-label="more options">
                </a>
                            </header>
                            <div class="card-table">
                                <div class="content">
                                    <table class="table is-fullwidth is-striped">
                                        <tbody>
                                            <tr>
                                                <td width="5%"><i class="fa fa-paper-plane"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">VIEW GRAPHS</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-paper-plane"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">VIEW GRAPHS</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-paper-plane"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">VIEW GRAPHS</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-paper-plane"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">VIEW GRAPHS</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i class="fa fa-paper-plane"></i></td>
                                                <td>Lorum ipsum dolem aire</td>
                                                <td class="level-right"><a class="button is-small is-primary" href="#">VIEW GRAPHS</a></td>
                                            </tr>
 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <footer class="card-footer">
                                <a href="#" class="card-footer-item">View All Projects</a>
                            </footer>
                        </div>
                    </div>


                    <div class="column is-6">
                        <div class="card events-card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    All scans
                                </p>
                            </header>
                        <div class="panel-body">
                            <div id="barChart2" class="rad-chart"></div>
                            <mdb-container>
                                <mdb-pie-chart
                                datalabels
                                :data="pieChartData"
                                :options="pieChartOptions"
                                :width="600"
                                :height="298"
                                />
                            </mdb-container>
                            </div>

                             <footer class="card-footer">
                                <a href="#" class="card-footer-item">View All</a>
                            </footer>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>

import { mapGetters } from "vuex";
 import { mdbPieChart, mdbContainer } from "mdbvue";

export default {
    name: "ChartPage",
    components: {
      mdbPieChart,
      mdbContainer
    },
    data() {
        return {
           activeButton: 0, pieChartData: {
          labels: ["Hunter", "Web", "Mobile", "Infra", "Source"],
          datasets: [
            {
              data: [300, 50, 100, 40, 120],
              backgroundColor: [
                "#F7464A",
                "#46BFBD",
                "#FDB45C",
                "#949FB1",
                "#4D5360"
              ],
              hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1",
                "#FFC870",
                "#A8B3C5",
                "#616774"
              ]
            }
          ]
        },
        pieChartOptions: {
          responsive: false,
          maintainAspectRatio: false,
          plugins: {
            datalabels: {
              color: "white",
              align: "center",
              font: {
                size: 16
              },
              formatter: value => {
                const [dataset] = this.pieChartData.datasets;
                const setValue = dataset.data.reduce((a, b) => a + b);

                return `${Math.round((value / setValue) * 100)}%`;
              }
            }
          }
        }

        };
    },
    computed: {
        ...mapGetters(["isAuthenticated", "loggedInUser"]),
    },
};
</script>