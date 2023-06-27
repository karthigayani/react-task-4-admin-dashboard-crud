import React from 'react'
import { FeaturesList } from './FeaturesList';
import { ColorBox } from './ColorBox';
import { Progress } from './Progress';
import { ChartList } from './ChartList';
import { CardList } from './CardList';


function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800" >Dashboard</h1>
            </div>
            <CardList />
            <ChartList />
            <div className='row'>
                <div class="col-lg-6 mb-4">
                    <ProgressList />
                    <ColorBoxList />
                </div>
                <div class="col-lg-6 mb-4">
                    <Features />
                </div>
            </div>
        </div>
    );
}
/*progressbar datalist*/
function ProgressList() {
    const progressdata = [
        {
            title: "Server Migration",
            percent: "20%",
            content: "20%",
            color: "danger"
        },
        {
            title: "Sales Tracking",
            percent: "40%",
            content: "40%",
            color: "warning"
        },
        {
            title: "Customer Database",
            percent: "60%",
            content: "60%",
            color: "primary"
        },
        {
            title: "Payout Details",
            percent: "80%",
            content: "80%",
            color: "info"
        },
        {
            title: "Account Setup",
            percent: "100%",
            content: "Complete!",
            color: "success"
        }
    ]
    return (
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div class="card-body">
                {progressdata.map(dt => <Progress data={dt} />)}
            </div>
        </div>
    )
}
/*colorboxes datalist*/
function ColorBoxList() {
    const colorsData = [
        {
            title: "Primary",
            colorcode: "#4e73df",
            color: "primary",

        },
        {
            title: "Success",
            colorcode: "#1cc88a",
            color: "success",

        },
        {
            title: "Info",
            colorcode: "#36b9cc",
            color: "info",

        },
        {
            title: "Warning",
            colorcode: "#f6c23e",
            color: "warning",

        },
        {
            title: "Danger",
            colorcode: "#e74a3b",
            color: "danger",

        },
        {
            title: "Secondary",
            colorcode: "#858796",
            color: "secondary",

        },
        {
            title: "Light",
            colorcode: "#f8f9fc",
            color: "light",
            ishilight: true,
            bg: "black"
        },
        {
            title: "Dark",
            colorcode: "#5a5c69",
            color: "dark",

        }
    ]
    return (
        <div class="row">
            {colorsData.map(color => <ColorBox data={color} />)}
        </div>
    )
}
/*illustrations and development approach datalist*/
function Features() {
    const contents = [
        {
            title: "Illustrations",
            content: "Add some quality, svg illustrations to your project courtesy of , a constantly updated collection of beautiful svg images that you can use completely free and without attribution!",
            isimage: true
        },
        {
            title: "Development Approach",
            content: "SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.",
            isimage: false
        }
    ]
    return (
        <div>
            {contents.map(dt => <FeaturesList data={dt} />)}
        </div>
    )
}
export default Dashboard