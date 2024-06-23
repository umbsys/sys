<template>
  <div class="container mt-16">
    <section class="content">
      <div class="row">
        <!-- BEGIN NAV TICKET -->
        <div class="col-md-3">
          <div class="grid support">
            <div class="grid-body">
              <h2>Browse</h2>

              <hr />

              <ul>
                <li class="active">
                  <a href="#"
                    >Everyone's Issues<span class="pull-right">142</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    >Created by you<span class="pull-right">52</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    >Mentioning you<span class="pull-right">18</span></a
                  >
                </li>
              </ul>

              <hr />

              <p><strong>Labels</strong></p>
              <ul class="support-label">
                <li>
                  <a href="#"
                    ><span class="bg-blue">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Bug<span class="pull-right">1</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-red">&nbsp;</span>&nbsp;&nbsp;&nbsp;Feature
                    Request<span class="pull-right">2</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-yellow">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Technical Support<span class="pull-right"
                      >3</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-black">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Account Issue<span class="pull-right"
                      >4</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-light-blue">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Payment Issue<span class="pull-right"
                      >5</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-green">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Security Issue<span class="pull-right"
                      >6</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-purple">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Other<span class="pull-right">7</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-teal">&nbsp;</span>&nbsp;&nbsp;&nbsp;High
                    Priority<span class="pull-right">8</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-orange">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Medium Priority<span class="pull-right"
                      >9</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-gray">&nbsp;</span>&nbsp;&nbsp;&nbsp;Low
                    Priority<span class="pull-right">10</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-cyan">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;New<span class="pull-right">11</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-brown">&nbsp;</span>&nbsp;&nbsp;&nbsp;In
                    Progress<span class="pull-right">12</span></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-pink">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Resolved<span class="pull-right"
                      >13</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-blue">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Closed<span class="pull-right"
                      >14</span
                    ></a
                  >
                </li>

                <li>
                  <a href="#"
                    ><span class="bg-light-green">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Software<span class="pull-right"
                      >17</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-red">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Hardware<span class="pull-right"
                      >18</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-black">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Network<span class="pull-right"
                      >19</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-yellow">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;UI/UX<span class="pull-right"
                      >20</span
                    ></a
                  >
                </li>
                <li>
                  <a href="#"
                    ><span class="bg-orange">&nbsp;</span
                    >&nbsp;&nbsp;&nbsp;Database<span class="pull-right"
                      >21</span
                    ></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- END NAV TICKET -->
        <!-- BEGIN TICKET -->
        <div class="col-md-9">
          <div class="grid support-content">
            <div class="grid-body">
              <h2>Announcements</h2>

              <hr />

              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <div style="display: flex; align-items: center">
                  <v-btn
                    variant="outlined"
                    color="success"
                    active
                    class="mr-3 hide-on-small"
                  >
                    162 Open
                  </v-btn>

                  <v-btn class="hide-on-small" variant="outlined">
                    9 Closed
                  </v-btn>
                </div>
                <NewTicket />
              </div>

              <div class="padding"></div>

              <div class="row">
                <!-- BEGIN TICKET CONTENT -->
                <v-expansion-panels class="my-4" variant="popout">
        <v-expansion-panel
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="تعميم إداري رقم 1"
        ></v-expansion-panel>
        <v-expansion-panel
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="تعميم إداري رقم 2"
        ></v-expansion-panel>
        <v-expansion-panel
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="تعميم إداري رقم 3"
        ></v-expansion-panel>
      </v-expansion-panels>
                <!-- END TICKET CONTENT -->
              </div>
            </div>
          </div>
        </div>
        <!-- END TICKET -->
      </div>
    </section>
  </div>
  <drawerComponent :noResize="true" />
  <tabComponent :noResize="true" />
</template>

<script setup>
import { ref, onMounted } from "vue";
import drawerComponent from "../components/drawerComponent.vue";
import tabComponent from "../components/tabComponent.vue";
import NewTicket from "../components/NewTicket.vue";

const items = ref(["Newest", "Oldest", "Recently", "Least recently "]);
const value = ref("Newest");
</script>

<style scoped>
body {
  margin-top: 20px;
  background: #eee;
}

.padding {
  padding: 10px;
}

/* GRID */
.col {
  padding: 10px 20px;
  margin-bottom: 10px;
  background: #fff;
  color: #666666;
  text-align: center;
  font-weight: 400;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}

.row h3 {
  color: #666666;
}

.row.grid {
  margin-left: 0;
}

.grid {
  position: relative;
  width: 100%;
  background: #fff;
  color: #666666;
  border-radius: 2px;
  margin-bottom: 25px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}

.grid .grid-header {
  position: relative;
  border-bottom: 1px solid #ddd;
  padding: 15px 10px 10px 20px;
}

.grid .grid-header:before,
.grid .grid-header:after {
  display: table;
  content: " ";
}

.grid .grid-header:after {
  clear: both;
}

.grid .grid-header span,
.grid .grid-header > .fa {
  display: inline-block;
  margin: 0;
  font-weight: 300;
  font-size: 1.5em;
  float: left;
}

.grid .grid-header span {
  padding: 0 5px;
}

.grid .grid-header > .fa {
  padding: 5px 10px 0 0;
}

.grid .grid-header > .grid-tools {
  padding: 4px 10px;
}

.grid .grid-header > .grid-tools a {
  color: #999999;
  padding-left: 10px;
  cursor: pointer;
}

.grid .grid-header > .grid-tools a:hover {
  color: #666666;
}

.grid .grid-body {
  padding: 15px 20px 15px 20px;
  font-size: 0.9em;
  line-height: 1.9em;
}

.grid .full {
  padding: 0 !important;
}

.grid .transparent {
  box-shadow: none !important;
  margin: 0px !important;
  border-radius: 0px !important;
}

.grid.top.black > .grid-header {
  border-top-color: #000000 !important;
}

.grid.bottom.black > .grid-body {
  border-bottom-color: #000000 !important;
}

.grid.top.blue > .grid-header {
  border-top-color: #007be9 !important;
}

.grid.bottom.blue > .grid-body {
  border-bottom-color: #007be9 !important;
}

.grid.top.green > .grid-header {
  border-top-color: #00c273 !important;
}

.grid.bottom.green > .grid-body {
  border-bottom-color: #00c273 !important;
}

.grid.top.purple > .grid-header {
  border-top-color: #a700d3 !important;
}

.grid.bottom.purple > .grid-body {
  border-bottom-color: #a700d3 !important;
}

.grid.top.red > .grid-header {
  border-top-color: #dc1200 !important;
}

.grid.bottom.red > .grid-body {
  border-bottom-color: #dc1200 !important;
}

.grid.top.orange > .grid-header {
  border-top-color: #f46100 !important;
}

.grid.bottom.orange > .grid-body {
  border-bottom-color: #f46100 !important;
}

.grid.no-border > .grid-header {
  border-bottom: 0px !important;
}

.grid.top > .grid-header {
  border-top-width: 4px !important;
  border-top-style: solid !important;
}

.grid.bottom > .grid-body {
  border-bottom-width: 4px !important;
  border-bottom-style: solid !important;
}

/* SUPPORT TICKET */
.support ul {
  list-style: none;
  padding: 0px;
}

.support ul li {
  padding: 8px 10px;
}

.support ul li a {
  color: #999;
  display: block;
}

.support ul li a:hover {
  color: #666;
}

.support ul li.active {
  background: #0073b7;
}

.support ul li.active a {
  color: #fff;
}

.support ul.support-label li {
  padding: 2px 0px;
}

.support h2,
.support-content h2 {
  margin-top: 5px;
}

.support-content .list-group li {
  padding: 15px 20px 12px 20px;
  cursor: pointer;
}

.support-content .list-group li:hover {
  background: #eee;
}

.support-content .fa-padding .fa {
  padding-top: 5px;
  width: 1.5em;
}

.support-content .info {
  color: #777;
  margin: 0px;
}

.support-content a {
  color: #111;
}

.support-content .info a:hover {
  text-decoration: underline;
}

.support-content .info .fa {
  width: 1.5em;
  text-align: center;
}

.support-content .number {
  color: #777;
}

.support-content img {
  margin: 0 auto;
  display: block;
}

.support-content .modal-body {
  padding-bottom: 0px;
}

.support-content-comment {
  padding: 10px 10px 10px 30px;
  background: #eee;
  border-top: 1px solid #ccc;
}

/* BACKGROUND COLORS */
.bg-red,
.bg-yellow,
.bg-aqua,
.bg-blue,
.bg-light-blue,
.bg-green,
.bg-navy,
.bg-teal,
.bg-olive,
.bg-lime,
.bg-orange,
.bg-fuchsia,
.bg-purple,
.bg-maroon,
bg-gray,
bg-black,
.bg-red a,
.bg-yellow a,
.bg-aqua a,
.bg-blue a,
.bg-light-blue a,
.bg-green a,
.bg-navy a,
.bg-teal a,
.bg-olive a,
.bg-lime a,
.bg-orange a,
.bg-fuchsia a,
.bg-purple a,
.bg-maroon a,
bg-gray a,
.bg-black a {
  color: #f9f9f9 !important;
}
.bg-white,
.bg-white a {
  color: #999999 !important;
}
.bg-red {
  background-color: #f56954 !important;
}
.bg-yellow {
  background-color: #f39c12 !important;
}
.bg-aqua {
  background-color: #00c0ef !important;
}
.bg-blue {
  background-color: #0073b7 !important;
}
.bg-light-blue {
  background-color: #3c8dbc !important;
}
.bg-green {
  background-color: #00a65a !important;
}
.bg-navy {
  background-color: #001f3f !important;
}
.bg-teal {
  background-color: #39cccc !important;
}
.bg-olive {
  background-color: #3d9970 !important;
}
.bg-lime {
  background-color: #01ff70 !important;
}
.bg-orange {
  background-color: #ff851b !important;
}
.bg-fuchsia {
  background-color: #f012be !important;
}
.bg-purple {
  background-color: #932ab6 !important;
}
.bg-maroon {
  background-color: #85144b !important;
}
.bg-gray {
  background-color: #eaeaec !important;
}
.bg-black {
  background-color: #222222 !important;
}
/* CSS for small devices */
@media (max-width: 576px) {
  .hide-on-small {
    display: none;
  }
}
</style>
