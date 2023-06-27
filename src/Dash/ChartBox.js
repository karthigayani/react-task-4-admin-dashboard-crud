/*line chart and pie chart component*/
import { Chart } from './Chart';
import { PieChart } from './PieChart';

export function ChartBox({ data }) {
    return (

        <div class={data.isareaChart ? "col-xl-8 col-lg-7" : "col-xl-4 col-lg-5"}>
            <div class="card shadow mb-4">

                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">{data.title}</h6>
                </div>
                <div class="chart-body">
                    <div class={data.isareaChart ? "chart-area" : "chart-pie pt-4 pb-2"}><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                        {data.isareaChart ? <Chart /> : <PieChart />}
                    </div>
                </div>
            </div>
        </div>

    );

}