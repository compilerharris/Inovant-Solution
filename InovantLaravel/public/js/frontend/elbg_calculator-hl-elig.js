$(document).ready(function() {
    $("#sliderLoanAmount").slider({tooltip:'always'});

    $("#sliderLoanAmount").on("slideStart slide slideStop", function(slideEvt) {
        $(".erroramt .errormsg").addClass('hidemsg');
        $("#calculate").removeClass('disablebutton');
        var name = slideEvt.value.toString().replace(/[!@#$%^&*,]/g, "");
        var formatedoutput = numberWithCommas(name);
        $("#sliderLoanAmountValue").val(formatedoutput);
        $(".amountSliderContainer .tooltip-inner").text(formatedoutput);
    });

    var rawvalue = $(".amountSliderContainer #tooltip .tooltip-inner").text();
    var formatedoutput = numberWithCommas(rawvalue);
    $(".amountSliderContainer #tooltip .tooltip-inner").text(formatedoutput);

    $("#sliderLoanAmountValue").on("change keyup focusout", function() {
        var name = $(this).val().replace(/[a-zA-Z!--+=_@#$%^&*~`<>?./{|}:;[\\\], ]/g, "");
        name = name.replace(/^0+/, '');
        $("#sliderLoanAmount").slider('setValue', parseInt(name));
        var formatedoutput = numberWithCommas(name);
        $(this).val(formatedoutput);
        $(".amountSliderContainer .tooltip-inner").html(formatedoutput);
    });

    $("#sliderLoanAmountValue").on("focusout", function() {
        var name = $(this).val().replace(/[a-zA-Z!@#$%^&%*, ]/g, "");
        var min = parseInt($(this).attr('min'));
        var max = parseInt($(this).attr('max'));
        if (name < min) {
            $(".erroramt .errormsg").text('Minimum value should be 100').removeClass('hidemsg');
            $("#calculate").addClass('disablebutton');
        } else if (name > 9999999) {
            $(".erroramt .errormsg").text('Maximum value should be 99.99L').removeClass('hidemsg');
            $("#calculate").addClass('disablebutton');
        } else {
            $(".erroramt .errormsg").addClass('hidemsg');
            $("#calculate").removeClass('disablebutton');
        }
        var formatedoutput = numberWithCommas(name);
        $(this).val(formatedoutput);
    });
$("#sliderLoanAmount1").slider({tooltip:'always'});

    $("#sliderLoanAmount1").on("slideStart slide slideStop", function(slideEvt) {
        $(".erroramt1 .errormsg1").addClass('hidemsg1');
        $("#calculate").removeClass('disablebutton');
        var name = slideEvt.value.toString().replace(/[!@#$%^&*,]/g, "");
        var formatedoutput = numberWithCommas(name);
        $("#sliderLoanAmountValue1").val(formatedoutput);
        $(".amountSliderContainer1 .tooltip-inner").text(formatedoutput);
    });

    var rawvalue = $(".amountSliderContainer1 #tooltip .tooltip-inner").text();
    var formatedoutput = numberWithCommas(rawvalue);
    $(".amountSliderContaine1r #tooltip .tooltip-inner").text(formatedoutput);

    $("#sliderLoanAmountValue1").on("change keyup focusout", function() {
        var name = $(this).val().replace(/[a-zA-Z!--+=_@#$%^&*~`<>?./{|}:;[\\\], ]/g, "");
        //name = name.replace(/^0+/, '');
        $("#sliderLoanAmount1").slider('setValue', parseInt(name));
        var formatedoutput = numberWithCommas(name);
        $(this).val(formatedoutput);
        $(".amountSliderContainer1 .tooltip-inner").html(formatedoutput);
    });

    $("#sliderLoanAmountValue1").on("focusout", function() {
        var name = $(this).val().replace(/[a-zA-Z!@#$%^&%*, ]/g, "");
        var min = parseInt($(this).attr('min'));
        var max = parseInt($(this).attr('max'));
        if (name < min) {
            $(".erroramt1 .errormsg1").text('Minimum value should be 0').removeClass('hidemsg1');
            $("#calculate").addClass('disablebutton');
        } else if (name > max) {
            $(".erroramt1 .errormsg1").text('Maximum value should be 99.99L').removeClass('hidemsg1');
            $("#calculate").addClass('disablebutton');
        } else {
            $(".erroramt1 .errormsg1").addClass('hidemsg1');
            $("#calculate").removeClass('disablebutton');
        }
        var formatedoutput = numberWithCommas(name);
        $(this).val(formatedoutput);
    });

    $("#sliderInterestRate").slider({tooltip:'always'});

    $("#sliderInterestRate").on("slideStart slide slideStop", function(slideEvt) {
        $(".errorinterest .errormsg").addClass('hidemsg');
        $("#calculate").removeClass('disablebutton');
        var percent = slideEvt.value + "%";
        $("#sliderInterestRateValue").val(percent);
    });

    $("#sliderInterestRateValue").on("keyup", function() {
        var name = $(this).val().replace(/[a-zA-Z!--+=_@#$%^&*~`<>?//{|}:;[\\\], ]/g, "");
        name = name.replace(/^0+/, '');
        name = name.replace(/^\./, "");
        $(this).val(name);
        $(".slider-percentage .tooltip-inner").html(name);
    });

    $("#sliderInterestRateValue").focusout(function() {
        var name = $(this).val().replace(/[a-zA-Z!@#$%^&%*, ]/g, "");
        var min = parseInt($(this).attr('min'));
        var max = parseInt($(this).attr('max'));
        if (name < min) {
            $(".errorinterest .errormsg").text('Minimum value should be 1%').removeClass('hidemsg');
            $("#calculate").addClass('disablebutton');
        } else if (name > max) {
            $(".errorinterest .errormsg").text('Maximum value should be 20%').removeClass('hidemsg');
            $("#calculate").addClass('disablebutton');
        } else {
            $(".errorinterest .errormsg").addClass('hidemsg');
            $("#calculate").removeClass('disablebutton');
        }
        var percent = name + "%";
        $(this).val(percent);
        $("#sliderInterestRate").slider('setValue', parseInt($(this).val()));
        $(".slider-percentage .tooltip-inner").html(name);
    });

    $("#sliderTenure").slider({tooltip:'always'});

    $("#sliderTenure").on("slideStart slide slideStop", function(slideEvt) {
        $(".errortenure .errormsg").addClass('hidemsg');
        $("#calculate").removeClass('disablebutton');
        $("#sliderTenureValue").val(slideEvt.value);
    });
    $("#sliderTenureValue").focusout(function() {
        var min = parseInt($(this).attr('min'));
        var max = parseInt($(this).attr('max'));
        var name = parseInt($("#sliderTenureValue").val());
        if (name < min) {
            $(".errortenure .errormsg").text('Minimum value should be 1 Year').removeClass('hidemsg');
            $("#calculate").addClass('disablebutton');
        } else if (name > max) {
            $(".errortenure .errormsg").text('Maximum value should be 30 Years').removeClass('hidemsg');
            $("#calculate").addClass('disablebutton');
        } else {
            $(".errortenure .errormsg").addClass('hidemsg');
            $("#calculate").removeClass('disablebutton');
        }
        $("#sliderTenure").slider('setValue', parseInt($(this).val()));
    });

    $("#sliderTenureValue").on("change keyup", function() {
        var name = $(this).val().replace(/[a-zA-Z!--+=_@#$%^&*~`<>?./{|}:;[\\\], ]/g, "");
        name = name.replace(/^0+/, '');
        $(this).val(name);
    });

    $("#processingfee").on("change keyup focusout", function() {
        var name = $(this).val().replace(/[a-zA-Z!--+=_@#$%^&*~`<>?./{|}:;[\\\], ]/g, "");
        name = name.replace(/^0+/, '');
        var formatedoutput = numberWithCommas(name);
        $(this).val(formatedoutput);
    });


    $("#hidetable").hide();


    // Emi Calculation
    $("#calculateform").submit(function(e) {
        e.preventDefault();
        if($(".hidemsg").length == 3){
            var loanAmount = parseInt($("input[name='loanAmount']").val().replace(/,/g, ""));
	    var loanAmount1 = parseInt($("input[name='loanAmount1']").val().replace(/,/g, ""));
            var tenureValue = parseInt($("input[name='tenure']").val());
            var interest = parseFloat($("input[name='interestRate']").val());
            if (interest != '' || interest != 0) {
                interest = parseFloat(interest);
            } else {
                interest = 10.25;
                $("input[name='interestRate']").val(interest);
            }
            //var interestRate = (interest) / 100;
            var interestRate = interest;
            var processingFeeInPercent = parseInt(commaRemover($("input[name='processingFee']").val()));
            if (!isNaN(processingFeeInPercent)) {
                processingFeeInPercent = parseInt(processingFeeInPercent);
            } else {
                processingFeeInPercent = parseInt(0);
            }
            if (!isNaN(loanAmount) & !isNaN(tenureValue) & !isNaN(loanAmount1) & !isNaN(interest)) {
                calculateEmiValues(loanAmount, tenureValue, interestRate, loanAmount1, processingFeeInPercent);
            }
        }else{
            $('.errormsg:not(.hidemsg)').fadeOut(250).fadeIn(250);
        }
    });

    $("#showtable").click(function() {
        $(".amortization-table").toggle();
        $("#hidetable").show();
        $("#showtable").hide();
        $('html, body').animate({
            scrollTop: $("#amortTable").offset().top
        }, 1000)
    });

    $("#hidetable").click(function() {
        $(".amortization-table").toggle();
        $("#hidetable").hide();
        $("#showtable").show();
    });

    $("#calculate").trigger('click');

});
var flagforscroll = false;
function calculateEmiValues(principle, tenure, interest, principle1, processingfee) {
    
    var grossAmount = principle;
    var otherEmi = principle1;
    var numberOfMonths = tenure * 12;
    var rateOfInterest = interest;

    var appfoir;
    if (grossAmount >= 100000) {
        appfoir = 60
    } else if (grossAmount > 50000) {
        appfoir = 55
    } else {
        appfoir = 50
    }
    //$("#foir").html(appfoir + "%");
    var sum = (appfoir / 100) * grossAmount;
    var sum_fixed = sum.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //$("#max_sum").html(sum_fixed);

    var emiother = sum - otherEmi;
    if (emiother > 0) {
        emiother_show = emiother.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } else {
        emiother_show = 0
    }
    
    //$("#emi_per").html(emiother_show);
    //$("#totamt").text(numberWithCommas(Math.round(emiother_show)));
    $("#totamt").text(emiother_show);

    var monthlyInterestRatio = (rateOfInterest / 100) / 12;
    var top = Math.pow((1 + monthlyInterestRatio), numberOfMonths);
    var bottom = top - 1;
    var sp = top / bottom;
    var emi = ((100000 * monthlyInterestRatio) * sp);
    var full = numberOfMonths * emi;
    var interest = full - 100000;
    var int_pge = (interest / full) * 100;
    var emi_str = emi.toFixed(2);
    var loan_am = (parseInt(emiother) * 100000) / emi;
    if (loan_am > 0) {
        loan_am = loan_am
    } else {
        loan_am = 0
    }
    var loan = loan_am;
    var loan_show = loan_am.toFixed(0).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //$("#elig_loan").html(loan_show);
    //$("#totamt1").text(numberWithCommas(Math.round(loan_show)));
    $("#totamt1").text(loan_show);

    if(flagforscroll == true){
        $('html, body').animate({
            scrollTop: $(".emi-amt-view").offset().top
        }, 1000);
    }
    flagforscroll = true;

    var amountforeligibilehouse = loan_show.replace(/,/g, "");
    var currentbaseurl = $("#currentbaseurl").text();
   
    $.ajax({
        type: "POST",
        url: currentbaseurl+"home/geteligibleprojects",
        data: 'amountforeligibilehouse='+amountforeligibilehouse,
        success: function(data) {
            $("#eligibleprojects").html(data);

            $('.eligibility-project-slider').owlCarousel({
                loop: false,
                items: 3,
                margin: 0,
                nav: true,
                dots: false,
                mouseDrag: false,
                responsive : {
                0 : {
                        items: 1
                },
                768 : {
                        items: 2
                },
                1024 : {
                        items: 3
                },
                1025 : {
                        items: 3
                }
                }
                // animateOut: 'fadeOut',
            });
        },
        error: function(data) {
            console.log('something went wrong');
        },
    });


}

function GetMonthName(monthNumber) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var lopmonth = monthNumber % 12
    if (monthNumber % 12 == 0) {
        return months[11];
    }
    return months[lopmonth - 1];
}

function calculateprincipleheader(emiYear) {
    for (var i = 0; i <= (emiYear + 1); i++) {
        var totalalue = $("#row" + i + "").nextUntil("#row" + (i + 1) + "").addClass("findvalue").find('span.principlevalue').text().replace(/,/g, '').split(' ');
        var sum = 0;
        for (var j = 0; j < (totalalue.length - 1); j++) {
            sum += parseInt(totalalue[j]);
            $("#principaltotal" + i + "").text(numberWithCommas(sum));
        }
    }
}

function calculateintrestheader(emiYear) {
    for (var i = 0; i <= (emiYear + 1); i++) {
        var totalalue = $("#row" + i + "").nextUntil("#row" + (i + 1) + "").addClass("findvalue").find('span.intrestvalue').text().replace(/,/g, '').split(' ');
        var sum = 0;
        for (var j = 0; j < (totalalue.length - 1); j++) {
            sum += parseInt(totalalue[j]);
            $("#intresttotal" + i + "").text(numberWithCommas(sum));
        }
    }
}

function calculateemiheader(emiYear) {
    for (var i = 0; i <= (emiYear + 1); i++) {
        var totalalue = $("#row" + i + "").nextUntil("#row" + (i + 1) + "").addClass("findvalue").find('span.emisvalue').text().replace(/,/g, '').split(' ');
        var sum = 0;
        for (var j = 0; j < (totalalue.length - 1); j++) {
            sum += parseInt(totalalue[j]);
            $("#emitotal" + i + "").text(numberWithCommas(sum));
        }
    }
}

function calculateoutstandingheader(emiYear) {
    for (var i = 0; i <= (emiYear + 1); i++) {
        var totalalue = $("#row" + i + "").nextUntil("#row" + (i + 1) + "").addClass("findvalue").find('span.outstaingvalue').text().replace(/,/g, '').split(' ');
        var sum = 0;
        for (var j = 0; j < (totalalue.length - 1); j++) {
            var getlastvalue = parseInt((totalalue.length - 2));
            sum = totalalue[getlastvalue];
            $("#outstandingtotal" + i + "").text(numberWithCommas(sum));
        }
    }
}

function isMobileSite() {
    if ($("#mobileSite").val() == "true") {
        return true;
    } else {
        return false;
    }
}


function numberWithCommas(va) {
    var x = va;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers != '') {
        lastThree = ',' + lastThree;
    }
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
}

function noenter() {
    return !(window.event && window.event.keyCode == 13);
}

function commaRemover(value) {
    return value.toString().replace(/[a-zA-Z!--+=_@#$%^&*, ]/g, "");
}