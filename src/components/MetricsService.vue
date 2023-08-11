<template>

  <div class="p-20">
      <div class="header flex items-center pl-4 bg-white mb-1" :style="{
          'width': '690px',
          'height': '40px',
      }">
          <h5 class="font-semibold">{{ i18n('Получить метрики по СМИ') }}</h5>
      </div>

      <form class="w-full p-4 bg-white" :style="{
          'width': '690px',
      }" @submit.prevent>
          <div class="flex">
              <div class="px-3" :style="{
                  'min-width': '320px'
              }">
                  <label class="block" for="smi_project_id">
                      {{ i18n('ID проекта') }}
                  </label>
                  <input id="smi_project_id" type="text" :placeholder="i18n('ID проекта')"
                      class="form-control mb-3" />
                  <div class="" :style="{
                      'max-height': '34px'
                  }">
                      <!-- <ul
            class="items-center text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 flex">
              <div class="flex items-center pl-3">
                <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500 m-0">
                <label for="horizontal-list-radio-millitary"
                  class="ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 mr-3 whitespace-nowrap mb-0">Проект</label>
              </div>
            </li>
            <li class="w-full dark:border-gray-600 flex">
              <div class="flex items-center pl-3">
                <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500 m-0"
                  checked>
                <label for="horizontal-list-radio-passport"
                  class="ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 mr-3 whitespace-nowrap mb-0">Папка</label>
              </div>
            </li>
          </ul> -->
                      <div class="date-container flex flex-wrap justify-between w-full items-center mb-3" style="height:34px">
                          {{ i18n('от') }} <input type="date" style="padding:0 5px;background:buttonface;border-radius:3px;width:110px;"
                              class="mx-2 h-full" id="s_date" :value="s_date">
                          {{ i18n('до') }} <input type="date" style="padding:0 5px;background:buttonface;border-radius:3px;width:110px;"
                              class="ml-2 h-full" id="f_date" :value="f_date">
                      </div>
                      <button class="flex text-white font-bold py-1 px-4 border rounded ml-auto get_project_metrics"
                          @click="getProjectSmiMetrics">
                          {{ i18n('Применить') }}
                      </button>
                  </div>
              </div>
              <div class="metrics w-full" v-show="smiMetrics.show">
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">{{ i18n('ID проекта') }}
                      </div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          smiMetrics.project_id
                      }}
                      </div>
                  </div>
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">{{ i18n('Название проекта') }}</div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          smiMetrics.project_name
                      }}
                      </div>
                  </div>
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">{{ i18n('Автор') }}</div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          smiMetrics.username
                      }}</div>
                  </div>
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">
                          {{ i18n('Аудитория/Охват') }}</div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          smiMetrics.audience
                      }}</div>
                  </div>
              </div>
          </div>
      </form>
  </div>

  <div class="p-20" style="padding-top:0px !important">
      <div class="header flex items-center pl-4 bg-white mb-1" :style="{
          'width': '690px',
          'height': '40px',
      }">
          <h5 class="font-semibold">{{ i18n('Получить метрики по Социальным сетям') }}</h5>
      </div>

      <form class="w-full p-4 bg-white" :style="{
          'width': '690px',
      }" @submit.prevent>
          <div class="flex">
              <div class="px-3" :style="{
                  'min-width': '320px'
              }">
                  <label class="block" for="soc_project_id">
                      {{ i18n('ID проекта') }}
                  </label>
                  <input id="soc_project_id" type="text" :placeholder="i18n('ID проекта')"
                      class="form-control mb-3" />
                  <div class="" :style="{
                      'max-height': '34px'
                  }">
                      <div class="date-container flex flex-wrap justify-between w-full items-center mb-3" style="height:34px">
                          {{ i18n('от') }} <input type="date" style="padding:0 5px;background:buttonface;border-radius:3px;width:110px;"
                              class="mx-2 h-full" id="s_date_2" :value="s_date">
                          {{ i18n('до') }} <input type="date" style="padding:0 5px;background:buttonface;border-radius:3px;width:110px;"
                              class="ml-2 h-full" id="f_date_2" :value="f_date">
                      </div>
                      <button class="flex text-white font-bold py-1 px-4 border rounded ml-auto get_project_metrics"
                          @click="getProjectSocMetrics">
                          {{ i18n('Применить') }}
                      </button>
                  </div>
              </div>
              <div class="metrics w-full" v-show="socMetrics.show">
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">{{ i18n('ID проекта') }}
                      </div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          socMetrics.project_id
                      }}
                      </div>
                  </div>
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">{{ i18n('Название проекта') }}</div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          socMetrics.project_name
                      }}
                      </div>
                  </div>
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">{{ i18n('Автор') }}</div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          socMetrics.username
                      }}</div>
                  </div>
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">
                          {{ i18n('Аудитория/Охват') }}</div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          socMetrics.audience
                      }}</div>
                  </div>
              </div>
          </div>
      </form>
  </div>


  <div class="p-20">
      <div class="header flex items-center pl-4 bg-white mb-1" :style="{
          'width': '690px',
          'height': '40px',
      }">
          <h5 class="font-semibold">{{ i18n('Получить метрики по СМИ') }}</h5>
      </div>

      <form class="w-full p-4 bg-white" :style="{
          'width': '690px',
      }" @submit.prevent>
          <div class="flex">
              <div class="px-3" :style="{
                  'min-width': '320px'
              }">
                  <label class="block" for="smi_project_id">
                      {{ i18n('ID проекта') }}
                  </label>
                  <input id="smi_project_id" type="text" :placeholder="i18n('ID проекта')"
                      class="form-control mb-3" />
                  <div class="" :style="{
                      'max-height': '34px'
                  }">
                      <div class="date-container flex flex-wrap justify-between w-full items-center mb-3" style="height:34px">
                          {{ i18n('от') }} <input type="date" style="padding:0 5px;background:buttonface;border-radius:3px;width:110px;"
                              class="mx-2 h-full" id="s_date" :value="s_date">
                          {{ i18n('до') }} <input type="date" style="padding:0 5px;background:buttonface;border-radius:3px;width:110px;"
                              class="ml-2 h-full" id="f_date" :value="f_date">
                      </div>
                      <button class="flex text-white font-bold py-1 px-4 border rounded ml-auto get_project_metrics"
                          @click="getProjectSmiMetrics">
                          {{ i18n('Применить') }}
                      </button>
                  </div>
              </div>
              <div class="metrics w-full" v-show="smiMetrics.show">
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">{{ i18n('ID проекта') }}
                      </div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          smiMetrics.project_id
                      }}
                      </div>
                  </div>
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">{{ i18n('Название проекта') }}</div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          smiMetrics.project_name
                      }}
                      </div>
                  </div>
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">{{ i18n('Автор') }}</div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          smiMetrics.username
                      }}</div>
                  </div>
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">
                          {{ i18n('Аудитория/Охват') }}</div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          smiMetrics.audience
                      }}</div>
                  </div>
              </div>
          </div>
      </form>
  </div>


  <div class="p-20">
      <div class="header flex items-center pl-4 bg-white mb-1" :style="{
          'width': '690px',
          'height': '40px',
      }">
          <h5 class="font-semibold">{{ i18n('Обновление метрик по преокту') }}</h5>
      </div>

      <form class="w-full p-4 bg-white" :style="{
          'width': '690px',
      }" @submit.prevent>
          <div class="flex">
              <div class="px-3" :style="{
                  'min-width': '320px'
              }">
                  <label class="block" for="smi_project_id">
                      {{ i18n('ID проекта') }}
                  </label>
                  <input id="smi_project_id" type="text" :placeholder="i18n('ID проекта')"
                      class="form-control mb-3" />
                  <div class="" :style="{
                      'max-height': '34px'
                  }">
                      <div class="date-container flex flex-wrap justify-between w-full items-center mb-3" style="height:34px">
                          {{ i18n('от') }} <input type="date" style="padding:0 5px;background:buttonface;border-radius:3px;width:110px;"
                              class="mx-2 h-full" id="s_date" :value="s_date">
                          {{ i18n('до') }} <input type="date" style="padding:0 5px;background:buttonface;border-radius:3px;width:110px;"
                              class="ml-2 h-full" id="f_date" :value="f_date">
                      </div>
                      <div class="flex">
                            <button class="flex text-white font-bold py-1 px-4 border rounded ml-auto get_project_metrics"
                                @click="updateMetrics">
                                {{ i18n('Проверить') }}
                            </button>
                            <button class="flex text-white font-bold py-1 px-4 border rounded ml-auto get_project_metrics"
                                @click="updateMetrics">
                                {{ i18n('Применить') }}
                            </button>
                      </div>
                     
                  </div>
              </div>
              <!-- <div class="metrics w-full" v-show="smiMetrics.show">
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">{{ i18n('ID проекта') }}
                      </div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          smiMetrics.project_id
                      }}
                      </div>
                  </div>
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">{{ i18n('Название проекта') }}</div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          smiMetrics.project_name
                      }}
                      </div>
                  </div>
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">{{ i18n('Автор') }}</div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          smiMetrics.username
                      }}</div>
                  </div>
                  <div class="metric__row flex items-center mb-2">
                      <div class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
                          :style="{
                              'min-width': '130px',
                              'max-width': '130px',
                          }">
                          {{ i18n('Аудитория/Охват') }}</div>
                      <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">{{
                          smiMetrics.audience
                      }}</div>
                  </div>
              </div> -->
          </div>
      </form>
  </div>


</template>

<script>
import i18n from '@/utils/i18n';
import moment from 'moment'

export default {
  data() {
      const newDate = moment().format('YYYY-MM-DD')
      return {
          s_date: '2021-01-01',
          f_date: newDate,
          smiMetrics: {
              show: true,
              project_id: 0,
              project_name: "project_name",
              username: "username",
              audience: 0,
          },
          socMetrics: {
              show: true,
              project_id: 0,
              project_name: "project_name",
              username: "username",
              audience: 0,
          },
      }
  },
  methods: {
      async getData(url = '') {
          const response = await fetch(url, {
              method: 'GET',
          });
          return response.json();
      },
      getProjectSmiMetrics() {
          let input_item_id = document.getElementById('smi_project_id').value;
          let s_date = document.querySelector('#s_date').value + '%2000:00:00';
          let f_date = document.querySelector('#f_date').value + '%2023:59:59';

          this.getData(`/ru/metrics-services/get-audience?item_id=${input_item_id}&s_date=${s_date}&f_date=${f_date}&type=1`)
              .then((data) => {
                  console.log('data', data)
                  Object.assign(this.smiMetrics, JSON.parse(data))
                  this.smiMetrics.show = true;
              })
              .catch((error) => {
                  this.smiMetrics.show = false;
                  console.log('error', error)
              });
      },
      getProjectSocMetrics() {
          let input_item_id = document.getElementById('soc_project_id').value;
          let s_date = document.querySelector('#s_date_2').value + '%2000:00:00';
          let f_date = document.querySelector('#f_date_2').value + '%2023:59:59';

          this.getData(`/ru/metrics-services/get-audience?item_id=${input_item_id}&s_date=${s_date}&f_date=${f_date}&type=2`)
              .then((data) => {
                  console.log('data', data)
                  Object.assign(this.socMetrics, JSON.parse(data))
                  this.socMetrics.show = true;
              })
              .catch((error) => {
                  this.socMetrics.show = false;
                  console.log('error', error)
              });
      },
      updateMetrics() {
        let s_date = document.guerySelector*''
      }
      // getMetrics() {
      //   let input_folders_id = document.getElementById('grid-password').value;

      //   this.getData('/ru/metrics-services/get-folders?folders_id=' + input_folders_id)
      //     .then((data) => {
      //       console.log('data', data)
      //     })
      //     .catch((error) => {
      //       console.log('error', error)
      //     });
      // },
  },
  setup() {
      return { i18n }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.get_project_metrics {
  background: #1ab394;
}
</style>
