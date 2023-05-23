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
                        <div
                            class="metric__value w-full text-center py-1 border-2 border-cyan-600"
                        >
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
                        <div
                            class="metric__value w-full text-center py-1 border-2 border-cyan-600"
                        >
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
                        <div
                            class="metric__value w-full text-center py-1 border-2 border-cyan-600"
                        >
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
                        <div
                            class="metric__value w-full text-center py-1 border-2 border-cyan-600"
                        >
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
                        <div
                            class="metric__value w-full text-center py-1 border-2 border-cyan-600"
                        >
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
                        <div
                            class="metric__value w-full text-center py-1 border-2 border-cyan-600"
                        >
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
                        <div
                            class="metric__value w-full text-center py-1 border-2 border-cyan-600"
                        >
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
                        <div
                            class="metric__value w-full text-center py-1 border-2 border-cyan-600"
                        >
                            {{ project_metrics.reposts }}
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
// import axios from 'axios'

export default {
    name: "App",
    components: {
        // MetricsService,
    },
    data() {
        const newDate = moment().format("YYYY-MM-DD");
        const previousDate = moment().subtract(1, 'months').format("YYYY-MM-DD");
        return {
            s_date: previousDate,
            f_date: newDate,
            project_s_date: previousDate,
            project_f_date: newDate,
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
                type: 'project',
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
    },
    setup() {
        return { i18n };
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
</style>
