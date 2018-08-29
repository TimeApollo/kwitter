import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import {connect} from "react-redux"




2018-08-26T20:15:42.416Z

formatPostDate = (date) => {
    const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let monthIndex = parseInt(substring(5, 7))

    let time = substring(11,18)

    let date = substring(8, 9)

    let year = date.substring(0, 4)

    return (

    time + " " + months[monthIndex] + " " +  date + ", "+ year 
    )
}


formatDate = (date) => {
    var monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var day = date.substring(8, 10);
    var monthIndex = parseInt(date.substring(5, 7), 10);
    var year = date.substring(0, 4);
    var time = "";
    if (date.substring(11, 13) > 12) {
      time = (date.substring(11, 13) - 12) + date.substring(13, 16) + " PM";
    } else {
      time = date.substring(11, 16) + " AM";
    }

    return day + ' ' + monthNames[monthIndex] + ' ' + year + ' at ' + time;
  }
