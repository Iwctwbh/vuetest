<template>
  <v-container
    id="subscribe"
    tag="section"
  >
    <v-card
      color="white"
      class="pa-3"
      elevation="3"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="5"
          >
            <base-subheading class="mb-3">
              缘分
            </base-subheading>

            <p>
              留下你的痕迹，<br />交个朋友吧。
            </p>
            <div
              elevation="0"
              max-height="50"
              @click="heartlike += 1"
            >
              <v-icon
                v-text="'mdi-heart-outline'"
                large
                color="red"
                style="position: relative"
              ></v-icon>
              <span style="position: relative; left: 5%;">{{ heartlike }}</span>
            </div>
          </v-col>

          <v-col
            cols="12"
            md="6"
            offset-md="1"
          >
            <base-subheading>联系方式</base-subheading>

            <v-list class="transparent">
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon
                    class="elevation-4"
                    color="black"
                  >
                    mdi-email-outline
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title style="font-weight: bold">邮 箱</v-list-item-title>

                <v-list-item-subtitle>
                  IWCTWBH@GMAIL.COM
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar>
                  <v-icon
                    class="elevation-4"
                    color="black"
                  >
                    mdi-map-marker
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title style="font-weight: bold">地 址</v-list-item-title>

                <v-list-item-subtitle>
                  中国-浙江
                </v-list-item-subtitle>
              </v-list-item>

              <v-list-item>
                <v-list-item-avatar>
                  <v-icon
                    class="elevation-4"
                    color="black"
                  >
                    mdi-phone
                  </v-icon>
                </v-list-item-avatar>

                <v-list-item-title style="font-weight: bold">电 话</v-list-item-title>

                <v-list-item-subtitle>
                  555-789-1234
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'HomeSubscribe',
    data: () => ({
      heartlike: 0,
    }),
  }
</script>
<style>
.btnheart {
  transition: all 1s ease;
}
.elevation-4 {
  background-color: white;
}
</style>
