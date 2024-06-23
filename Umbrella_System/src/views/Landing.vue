<template>
  <div
    lc-helper="background"
    class="container-fluid py-5 mb-4 d-flex justify-content-center"
    style="
      background-image: url('https://static.wixstatic.com/media/cf9d35_7cc7458094564cd7a14db7a61d34dc75~mv2.jpg/v1/fill/w_1024,h_412,al_c,q_85,enc_auto/cf9d35_7cc7458094564cd7a14db7a61d34dc75~mv2.jpg');
      background-size: cover;
      background-position: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    "
  >
    <div
      class="p-5 mb-4 lc-block col-xxl-7 col-lg-8 col-12"
      style="
        backdrop-filter: blur(6px) saturate(102%);
        -webkit-backdrop-filter: blur(6px) saturate(102%);
        background-color: rgba(255, 255, 255, 0.45);
        border-radius: 12px;
        border: 1px solid rgba(209, 213, 219, 0.3);
      "
    >
      <div class="lc-block">
        <div editable="rich">
          <h3 class="fw-bolder display-3">Umbrella Reinsurance system</h3>
        </div>
      </div>
      <div class="lc-block col-md-8">
        <div editable="rich">
          <p class="lead">
            A comprehensive reinsurance platform designed to streamline and optimize both commercial and takaful (Islamic insurance) reinsurance operations. Empowering your business with advanced tools and seamless integration for efficient risk management and unparalleled service delivery.
          </p>
        </div>
      </div>
      <div class="lc-block">
        <v-btn to="login" size="large" style="margin-right: 10px; margin-bottom: 10px;" color="primary">Commercial</v-btn>
        <v-btn size="large" variant="outlined"  color="primary">Takafully</v-btn>
      </div>
    </div>
  </div>
</template>
