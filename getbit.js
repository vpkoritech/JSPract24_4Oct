// After PR comments

const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("X-BITSIGHT-CONNECTOR-NAME-VERSION", "Bitsight-1.0.3");
myHeaders.append("X-BITSIGHT-CALLING-PLATFORM-VERSION", "Splunk-Enterprise");
myHeaders.append("Authorization", "Basic  YzQ2Mzc0ZWZiZjBmNTQxZmNlMDIzZDVmNWQ1MjI4NjI0MzhlNGMxZTpjNDYzNzRlZmJmMGY1NDFmY2UwMjNkNWY1ZDUyMjg2MjQzOGU0YzFl");
myHeaders.append("Cookie", "AWSALB=isxn//VV8oHBV12nTc2xEwyodLLzP/6d5Z7SabqepgP+oYni/uWzKkLNYM93FQp4eHitdWBnYltjGCMwd7dXaow2L6WdqGAe/NauvVCYji72EyE5Xv+0TmDqXlrR; AWSALBCORS=isxn//VV8oHBV12nTc2xEwyodLLzP/6d5Z7SabqepgP+oYni/uWzKkLNYM93FQp4eHitdWBnYltjGCMwd7dXaow2L6WdqGAe/NauvVCYji72EyE5Xv+0TmDqXlrR");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://api.bitsighttech.com/ratings/v2/portfolio?scope=spm", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));