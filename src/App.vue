<template>
  <!-- <MetricsService /> -->

  <div class="p-20">
    <div
      class="header flex items-center pl-4 bg-white mb-1"
      :style="{
        width: '690px',
        height: '40px',
      }"
    >
      <h5 class="font-semibold">
        {{ i18n("Получить метрики по папкам") }}
      </h5>
    </div>

    <form
      class="w-full p-4 bg-white"
      :style="{
        width: '690px',
      }"
      @submit.prevent
    >
      <div class="flex">
        <div
          class="px-3 w-full"
          :style="{
            width: '650px',
          }"
        >
          <label class="block" for="soc_project_id">
            {{ i18n("ID папки") }}
          </label>
          <input
            id="folder_name"
            type="text"
            :placeholder="i18n('ID папки')"
            class="form-control mb-3"
          />

          <div class="flex flex-wrap justify-between">
            <div
              class="date-container flex flex-wrap justify-between w-full items-center mb-3"
              style="height: 34px"
            >
              {{ i18n("от") }}
              <input
                type="date"
                style="
                  padding: 0 5px;
                  background: buttonface;
                  border-radius: 3px;
                  width: 110px;
                "
                class="mx-2 h-full"
                id="s_date"
                v-model.trim="s_date"
              />
              {{ i18n("до") }}
              <input
                type="date"
                style="
                  padding: 0 5px;
                  background: buttonface;
                  border-radius: 3px;
                  width: 110px;
                "
                class="ml-2 h-full"
                id="s_date"
                v-model.trim="f_date"
              />
            </div>
            <select
              id="folder-news-type"
              class="mr-3"
              style="
                padding-left: 5px;
                margin-left: 29px;
                height: 34px;
                border-radius: 3px;
              "
            >
              <option value="1" disabled>{{ i18n("СМИ") }}</option>
              <option value="2" selected>
                {{ i18n("Соц.сети") }}
              </option>
            </select>
            <button
              class="text-white font-bold py-1 px-4 border rounded get_folder_metrics"
              @click="createMetrics"
            >
              {{ i18n("Применить") }}
            </button>
          </div>
        </div>
        <div class="metrics w-full" style="padding-top: 15px">
          <div class="metric__row flex items-center mb-2">
            <div
              class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
              :style="{
                'min-width': '130px',
                'max-width': '130px',
              }"
            >
              {{ i18n("Охват") }}
            </div>
            <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">
              {{ metrics.members }}
            </div>
          </div>
          <div class="metric__row flex items-center mb-2">
            <div
              class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
              :style="{
                'min-width': '130px',
                'max-width': '130px',
              }"
            >
              {{ i18n("Лайки") }}
            </div>
            <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">
              {{ metrics.likes }}
            </div>
          </div>
          <div class="metric__row flex items-center mb-2">
            <div
              class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
              :style="{
                'min-width': '130px',
                'max-width': '130px',
              }"
            >
              {{ i18n("Комментарии") }}
            </div>
            <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">
              {{ metrics.comments }}
            </div>
          </div>
          <div class="metric__row flex items-center mb-2">
            <div
              class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
              :style="{
                'min-width': '130px',
                'max-width': '130px',
              }"
            >
              {{ i18n("Репосты") }}
            </div>
            <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">
              {{ metrics.reposts }}
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>

  <div class="p-20" style="padding-top: 0px !important">
    <div
      class="header flex items-center pl-4 bg-white mb-1"
      :style="{
        width: '690px',
        height: '40px',
      }"
    >
      <h5 class="font-semibold">
        {{ i18n("Получить метрики по проекту") }}
      </h5>
    </div>

    <form
      class="w-full p-4 bg-white"
      :style="{
        width: '690px',
      }"
      @submit.prevent
    >
      <div class="flex">
        <div
          class="px-3 w-full"
          :style="{
            width: '650px',
          }"
        >
          <label class="block" for="soc_project_id">
            {{ i18n("ID папки") }}
          </label>
          <input
            id="project_name"
            type="text"
            :placeholder="i18n('ID папки')"
            class="form-control mb-3"
          />

          <div class="flex flex-wrap justify-between">
            <div
              class="date-container flex flex-wrap justify-between w-full items-center mb-3"
              style="height: 34px"
            >
              {{ i18n("от") }}
              <input
                type="date"
                style="
                  padding: 0 5px;
                  background: buttonface;
                  border-radius: 3px;
                  width: 110px;
                "
                class="mx-2 h-full"
                id="s_date"
                v-model.trim="project_s_date"
              />
              {{ i18n("до") }}
              <input
                type="date"
                style="
                  padding: 0 5px;
                  background: buttonface;
                  border-radius: 3px;
                  width: 110px;
                "
                class="ml-2 h-full"
                id="s_date"
                v-model.trim="project_f_date"
              />
            </div>
            <select
              id="project-news-type"
              class="mr-3"
              style="
                padding-left: 5px;
                margin-left: 29px;
                height: 34px;
                border-radius: 3px;
              "
            >
              <option value="1" disabled>{{ i18n("СМИ") }}</option>
              <option value="2" selected>
                {{ i18n("Соц.сети") }}
              </option>
            </select>
            <button
              class="text-white font-bold py-1 px-4 border rounded get_folder_metrics"
              @click="createProjectMetrics"
            >
              {{ i18n("Применить") }}
            </button>
          </div>
        </div>
        <div class="metrics w-full" style="padding-top: 15px">
          <div class="metric__row flex items-center mb-2">
            <div
              class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
              :style="{
                'min-width': '130px',
                'max-width': '130px',
              }"
            >
              {{ i18n("Охват") }}
            </div>
            <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">
              {{ project_metrics.members }}
            </div>
          </div>
          <div class="metric__row flex items-center mb-2">
            <div
              class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
              :style="{
                'min-width': '130px',
                'max-width': '130px',
              }"
            >
              {{ i18n("Лайки") }}
            </div>
            <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">
              {{ project_metrics.likes }}
            </div>
          </div>
          <div class="metric__row flex items-center mb-2">
            <div
              class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
              :style="{
                'min-width': '130px',
                'max-width': '130px',
              }"
            >
              {{ i18n("Комментарии") }}
            </div>
            <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">
              {{ project_metrics.comments }}
            </div>
          </div>
          <div class="metric__row flex items-center mb-2">
            <div
              class="metric__name whitespace-nowrap text-center py-1 border-2 border-cyan-600 bg-cyan-600 text-white mr-1"
              :style="{
                'min-width': '130px',
                'max-width': '130px',
              }"
            >
              {{ i18n("Репосты") }}
            </div>
            <div class="metric__value w-full text-center py-1 border-2 border-cyan-600">
              {{ project_metrics.reposts }}
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>

  <div class="p-20" style="padding-top: 0px !important">
    <div
      class="header flex items-center pl-4 bg-white mb-1"
      :style="{
        width: '690px',
        height: '40px',
      }"
    >
      <h5 class="font-semibold">
        {{ i18n("Обновление метрик") }}
      </h5>
    </div>

    <form
      class="w-full p-4 bg-white"
      :style="{
        width: '690px',
      }"
      @submit.prevent
    >
      <div class="flex">
        <div
          class="px-3 w-full"
          :style="{
            width: '650px',
            height: '150px',
          }"
        >
          <label class="block" for="soc_project_id">
            {{ i18n("ID проекта") }}
          </label>
          <!-- <input
            id="project_id"
            type="text"
            :placeholder="i18n('ID проекта')"
            class="form-control mb-3"
            style="max-width: 309px"
          /> -->

          <div id="v-model-select" class="select-list">
            <select v-model="selected_project">
              <option disabled value="">{{ i18n("Выберите один из проектов") }}</option>
              <option v-for="project in user_projects" :key="project.id" :value="project.id">
                {{ project.name }} - {{ project.id }}
              </option>
            </select>
            <!-- <span>{{ i18n("Выбрано") }}: {{ selected_project }}</span> -->
          </div>

          <div class="flex flex-wrap justify-between" style="flex-direction: column">
            <div
              class="date-container flex flex-wrap justify-between w-full items-center mb-3"
              style="height: 34px; width: 309px"
            >
              {{ i18n("от") }}
              <input
                type="date"
                style="
                  padding: 0 5px;
                  background: buttonface;
                  border-radius: 3px;
                  width: 110px;
                "
                class="mx-2 h-full"
                id="s_date"
                v-model.trim="metrics_s_date"
              />
              {{ i18n("до") }}
              <input
                type="date"
                style="
                  padding: 0 5px;
                  background: buttonface;
                  border-radius: 3px;
                  width: 110px;
                "
                class="ml-2 h-full"
                id="f_date"
                v-model.trim="metrics_f_date"
              />
            </div>
            <div class="flex justify-between" style="width: 309px">
              <button
                class="text-white font-bold py-1 px-4 border rounded get_folder_metrics"
                style="margin-left: 50px"
                @click="checkMetrics"
              >
                {{ i18n("Проверить") }}
              </button>
              <button
                class="text-white font-bold py-1 px-4 border rounded get_folder_metrics"
                @click="updateMetrics"
              >
                {{ i18n("Применить") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import MetricsService from "./components/MetricsService.vue";
import moment from "moment";
import i18n from "./utils/i18n";
import { formatDateTime } from "./utils/formatDateTime";
import { formatMinutes } from "./utils/formatMinutes";
import { updateEndDate } from "./utils/updateEndDate";
import { calculateTimeDiff } from "./utils/calculateTimeDiff";
// import axios from 'axios'

export default {
  name: "App",
  components: {
    // MetricsService,
  },
  data() {
    const newDate = moment().format("YYYY-MM-DD");
    const previousDate = moment().subtract(1, "months").format("YYYY-MM-DD");
    return {
      user_projects: [],
      selected_project: "",
      s_date: previousDate,
      f_date: newDate,
      project_s_date: previousDate,
      project_f_date: newDate,
      metrics_s_date: previousDate,
      metrics_f_date: newDate,
      metrics: {
        members: "0",
        likes: "0",
        comments: "0",
        reposts: "0",
      },
      project_metrics: {
        members: "0",
        likes: "0",
        comments: "0",
        reposts: "0",
      },
    };
  },
  methods: {
    async createMetrics() {
      let data = {
        folder_id: document.querySelector("#folder_name").value,
        news_type: document.querySelector("#folder-news-type").value,
        s_date: this.s_date + "%2000:00:00",
        f_date: this.f_date + "%2023:59:59",
      };
      console.log(data);

      fetch(
        `/ru/metrics-services/get-metrics?folder_id=${data.folder_id}&s_date=${data.s_date}&f_date=${data.f_date}&news_type=${data.news_type}`
      )
        .then((response) => response.json())
        .then((res_data) => {
          console.log(res_data);
          console.log(JSON.parse(res_data));
          Object.assign(this.metrics, JSON.parse(res_data));
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async createProjectMetrics() {
      let data = {
        folder_id: document.querySelector("#project_name").value,
        news_type: document.querySelector("#project-news-type").value,
        type: "project",
        s_date: this.project_s_date + "%2000:00:00",
        f_date: this.project_f_date + "%2023:59:59",
      };
      console.log(data);
      fetch(
        `/ru/metrics-services/get-metrics?folder_id=${data.folder_id}&s_date=${data.s_date}&f_date=${data.f_date}&news_type=${data.news_type}&type=${data.type}`
      )
        .then((response) => response.json())
        .then((res_data) => {
          console.log(res_data);
          console.log(JSON.parse(res_data));
          Object.assign(this.project_metrics, JSON.parse(res_data));
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateMetrics() {
      let datetime_proc = formatDateTime(new Date());

      const startDate = new Date(this.metrics_s_date);
      const endDate = new Date(this.metrics_f_date);

      updateEndDate(startDate, endDate);
      const { timeDiff } = calculateTimeDiff();

      let data = {
        datetime_proc,
        project_id: this.selected_project,
        type: "project",
        s_date: startDate.toISOString().slice(0, 10) + " 00:00:00",
        f_date: endDate.toISOString().slice(0, 10) + " 23:59:59",
      };
      if (this.selected_project.length == 0) {
        const translatedMessage = i18n("Укажите id проекта");
        alert(translatedMessage);
      } else {
        if (timeDiff >= 10) {
          if (startDate <= endDate) {
            fetch(
              `/ru/metrics-services/upgrade-metrics?project_id=${data.project_id}&s_date=${data.s_date}&f_date=${data.f_date}&type=${data.type}&datetime_proc=${data.datetime_proc}`
            )
              .then((response) => response.json())
              .then((res_data) => {
                const data = JSON.parse(res_data);
                if (data.status) {
                  const translatedMessage = i18n(
                    "Заявка на обновление метрик по проекту была принята"
                  );
                  alert(translatedMessage);
                } else {
                  const translatedMessage = i18n("Что-то пошло не так");
                  alert(translatedMessage);
                }
              })
              .catch((error) => {
                console.log(error);
              });

            localStorage.setItem("prompt time", new Date());
          } else {
            const translatedMessage = i18n("Укажите правильный промежуток времени");
            alert(translatedMessage);
          }
        } else {
          alert(`${formatMinutes(10 - timeDiff)}`);
        }
      }
    },
    async checkMetrics() {
      const startDate = new Date(this.metrics_s_date);
      const endDate = new Date(this.metrics_f_date);

      updateEndDate(startDate, endDate);

      let data = {
        project_id: this.selected_project,
        s_date: startDate.toISOString().slice(0, 10) + " 00:00:00",
        f_date: endDate.toISOString().slice(0, 10) + " 23:59:59",
        type: "project",
      };

      if (this.selected_project.length == 0) {
        const translatedMessage = i18n("Укажите id проекта");
        alert(translatedMessage);
      } else {
        if (startDate <= endDate) {
          fetch(
            `/ru/metrics-services/check-metrics?project_id=${data.project_id}&s_date=${data.s_date}&f_date=${data.f_date}&type=${data.type}`
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (data.status == 200) {
                const translatedMessage = i18n("Метрики по проекту обновлены");
                alert(translatedMessage);
              } else if (data.status == 404) {
                const startTranslation = i18n("Метрики обновляются по данному промежутку времени");
                const projectIDTranslation = i18n("Id проекта");
                const translatedMessage = `${startTranslation}:\n${data.project.start_date} - ${data.project.finish_date} \n${projectIDTranslation}: ${data.project.project_id}`;
                alert(translatedMessage);
              } else if (data.status == 400) {
                const startTranslation = i18n("Метрики обновляются по данному промежутку времени");
                const projectIDTranslation = i18n("Id проекта");
                const translatedMessage = `${startTranslation}:\n${data.project.start_date} - ${data.project.finish_date} \n${projectIDTranslation}: ${data.project.project_id}`;
                alert(translatedMessage);
              } else if(data.status == 500) {
                const translatedMessage = i18n("Укажите промежуток времени который вы указывали при обновлении метрик")
                alert(translatedMessage)
              }
              console.log(data);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const translatedMessage = i18n("Укажите правильный промежуток времени");
          alert(translatedMessage);
        }
        console.log(data);
      }
    },
  },
  setup() {
    return { i18n };
  },
  mounted() {
    const jsonInput = document.getElementById('user_projects');
    this.user_projects = JSON.parse(jsonInput.value)
    console.log(this.user_projects)
  },
};
</script>

<style>
body {
  background: #f3f3f4;
}

.get_folder_metrics {
  background: #1ab394;
}

.get_project_metrics {
  background: #1ab394;
}

.select-list{
  padding: 10px 0px 10px 0px;
}

</style>
