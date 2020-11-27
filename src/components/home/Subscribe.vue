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
              留下你的痕迹，<br>交个朋友吧
            </p>
            <div
              elevation="0"
              max-height="50"
              @click="heartclick()"
            >
              <v-icon
                large
                color="red"
                style="position: relative; cursor: pointer"
                v-text="'mdi-heart-outline'"
              />
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

                <v-list-item-title style="font-weight: bold">
                  邮 箱
                </v-list-item-title>

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

                <v-list-item-title style="font-weight: bold">
                  地 址
                </v-list-item-title>

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

                <v-list-item-title style="font-weight: bold">
                  电 话
                </v-list-item-title>

                <v-list-item-subtitle>
                  123-4567-8901
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>

      <v-card
        width="500"
        elevation="0"
      >
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="4"
            >
              <v-text-field
                color="blue"
                label="昵称（选填）"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="8"
            >
              <v-text-field
                color="blue"
                v-model="email"
                :rules="[rules.email]"
                label="邮箱（选填）"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            color="blue"
            v-model="message"
            :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
            :append-outer-icon="'mdi-send'"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="内容"
            type="text"
            @click:append-outer="sendMessage"
            @click:append="markerclick"
          ></v-text-field>
        </v-container>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'HomeSubscribe',
    /* data: () => ({
      heartlike: null,
    }), */
    data () {
      return {
        marker: true,
        rules: {
          required: null, // value => !!value || 'Required.',
          email: value => {
            if (!value) {
              return true
            } else {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return pattern.test(value) || 'Invalid e-mail.'
            }
          },
        },
      }
    },
    mounted () {
      this.get_heart()
    },
    methods: {
      markerclick () {
        this.marker = !this.marker
      },
      sendMessage () {
      },
      heartclick () {
        axios.get('http://109.236.63.117:5000/weatherforecast/heart').then((response) => {
          /* console.log(response.data) */
          /* this.heartlike = response.data */
        })
        this.heartlike += 1
      },
      get_heart () {
        axios.get('http://109.236.63.117:5000/weatherforecast/get_heart').then((response) => {
          /* console.log(response.data) */
          this.heartlike = response.data
        })
      },
    },
    /* loginPost: function () {
      const params = null
      https.fetchPost('/weatherforecast/heart', params).then((data) => {
        this.base.token = data.data.token
        // console.log("this.base.tokenthis.base.token",this.base.token)
        this.indexPost2(this.rres)
      }).catch(err => {
        console.log(err)
      },
      )
    },
    indexPost2: function (date) {
      var this_ = this
      this_.check = false
      var jobj = { data: { menuDate: date, token: this.base.token } }
      const string = JSON.stringify(jobj)
      const params = { dailyInfo: string }
      https.fetchPost('/meals/mobile/getDailyMenuByDate', params)
        .then((data) => {
          this_.base.indexData = data
          this_.check = true
          // console.log('thenthenthenthen',data)
        })
        .catch((err) => {
          console.log(err)
        })
    }, */
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
