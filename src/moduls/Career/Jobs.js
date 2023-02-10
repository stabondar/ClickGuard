import './jobs.css'

// import 'https://jobs.clickguard.com/wp-content/uploads/2022/10/timeElapsed.min_.js'

export default class Jobs 
{
    constructor()
    {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.turbohire.co/api/careerpagejobs",
            "method": "POST",
            "headers": {
                "X-Api-Key": "{8C80460A-716A-413A-99AF-BFCE353ABD27}",
                "Accept": "*/*",
                "Cache-Control": "no-cache",
                "Host": "api.turbohire.co",
                "Accept-Encoding": "gzip, deflate",
                "Content-Length": "0",
                "Connection": "keep-alive",
                "cache-control": "no-cache"
            }
        }
    
        $(document).ready(function () {
            $.ajax(settings).done(function (response) {
                response.Result.forEach(function (job) {
                    $("#jobs").append($(`<div class="jobs__item">
                        <p class="jobs__timer p--14" data-time="${job.CreatedDate}">${job.CreatedDate}</p>
                        <h2 class="h--32">${job.JobTitle}</h1>
                        <div class="jobs__points">
                            <p class="p--18">Location: Remote Work</p>
                            <p class="p--18">Type of employment ${job.JobType}</p>
                            <p class="p--18">Department ${job.Department}</p>
                        </div>
                        <div class="jobs__button-parent">
                            <button><a href="${job.ApplyUrl}" target="_blank" class="btn is--blue"> 
                                <p class="p--16 weight--700">Apply</p> 
                                <div class="btn__border"></div>
                                <div class="btn__border--bg-parent">
                                    <div class="btn__border--bg"></div>
                                </div>
                            </a></button>
                        </div>
                    </div>`));

                    // console.log(job);
                })
            });
        })

        $(document).ajaxStop(function() {
            $('.jobs__timer').timeElapsed({
                currentTime: new Date,
                postfix:"ago",
            });
        })
    }
}