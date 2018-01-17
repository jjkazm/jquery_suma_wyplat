    'use strict';

    $(function () {

        $("button#count-sum").click(function () {
            var employeesNumber = $("span.salary").length;
            var sum = 0;

            for (var i = 0; i < employeesNumber; i++) {
                sum += parseInt($('span.salary').eq(i).text());
                console.log(sum);
            }
            
            $('span#sum').text(sum);
        })


    })