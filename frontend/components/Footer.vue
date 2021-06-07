<template>
  <!-- Footer -->
    <footer class="grey-background text-white text-center">
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase font-opensans-min">Vulnerable Node Web Application</h5>

          <p>
            This application has been created to be vulnerable on purpose. 
            Feel free to experiment with it so you can learn the most popular 
            vulnerabilities in web applications. 
            This study was used to see the efficiency of free scanning tools.
          </p>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase font-opensans-min">Top Vulnerabilities</h5>

          <ul class="list-unstyled mb-0">
            <li><icon-base icon-name="Security"><icon-security /></icon-base>
              <a href="#!" class="text-white">A1-Injection</a>
            </li>
            <li><icon-base icon-name="Security"><icon-security /></icon-base>
              <a href="#!" class="text-white">A2-Broken Authentication</a>
            </li>
            <li><icon-base icon-name="Security"><icon-security /></icon-base>
              <a href="#!" class="text-white">A3-Sensitive Data Exposure</a>
            </li>
            <li><icon-base icon-name="Security"><icon-security /></icon-base>
              <a href="#!" class="text-white">A5-Broken Access Control</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0 font-opensans-min">Links</h5>

          <ul class="list-unstyled mt-2">
            <li><icon-base viewBox="0 0 28.88 28.203" icon-name="Security"><icon-github  /></icon-base>
              <a href="#!" class="text-white"> Github Repository</a>
            </li>
            <li><icon-base viewBox="0 0 28.88 28.203" icon-name="Security"><icon-github  /></icon-base>
              <a href="#!" class="text-white"> Github Wiki</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2020 Copyright:
      <a class="text-white" href="#!">SSANCA02 github</a>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

.font-opensans-min{
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1.8rem;
}

.grey-background{
  background-color: grey;
}


</style>