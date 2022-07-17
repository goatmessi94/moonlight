
/***************************************************** 납품 견적서 START **************************************************************************/
/***************************************************** 납품 견적서 START **************************************************************************/
/***************************************************** 납품 견적서 START **************************************************************************/
// 수량산출 접었다 펼치기 START
function openCloseToc() {
    if ($(".calcu_output_wrap").css("display") == "none") {
        $(".calcu_output_wrap").css("display", "block");
        document.getElementById('toc-toggle').textContent = '숨기기';
    } else {
        $(".calcu_output_wrap").css("display", "none");
        document.getElementById('toc-toggle').textContent = '수량산출';
    }
}
// 수량산출 접었다 펼치기 END


//납품 신규 행추가, 특기사항 autosize START
$(document).ready(function () {

    $(document).on("click", "button[name='add']", function () {
        $(this).parent().parent().after($("#AddrowContent").val());
    });

    $(document).on("click", "button[name='delete']", function () {
        if ($(this).closest("table").find(">tbody >tr").length != 1) {
            $(this).parent().parent().remove();
            $(".simple_esimate_table_contents").find("tbody").find("tr").eq(0).find("td:eq(5)").find("input").trigger("change");
            $(".order_table_contents").find("tbody").find("tr").eq(0).find("td:eq(5)").find("input").trigger("change");


        }

    });

        $(document).on("click", "button[name='add2']", function () {
            $(this).parent().parent().after($("#AddrowContent").val());
        });

        $(document).on("click", "button[name='delete2']", function () {
            if ($(this).closest("table").find(">tbody >tr").length != 1) {
                $(this).parent().parent().remove();
            }

        });

    autosize($(".simple_esimate_table_contents tfoot textarea"));
    $(".simple_esimate_table_contents tfoot textarea").attr("spellcheck", false);

    autosize($(".order_table_contents tfoot textarea"));
    $(".order_table_contents tfoot textarea").attr("spellcheck", false);


});
// 납품 신규 행추가, 특기사항 autosize END

// 납품 견적서 단가 * 수량 = 공급가액 함수 START
function price(obj) {
    var x = $(obj).parent().parent().find("td:eq(3)").find("input").val();
    var y = $(obj).parent().parent().find("td:eq(5)").find("input").val();
    x = x.replace(/[,]+/g, '');
    y = y.replace(/[,]+/g, '');

    var sum;

    if (x == "" || y == "") {
        sum = null;

    } else {

        sum = Number(x) * Number(y);
        sum = comma(sum)
    }

    $(obj).parent().parent().find("td:eq(6)").find("input").val(sum);
    $(obj).parent().parent().find("td:eq(6)").find("input").trigger("change");

}
// 납품 견적서 단가 * 수량 = 공급가액 함수 END


// 납품 견적서 총합계 함수 START
function price_sum(obj) {

    var x = $(".simple_esimate_table_contents tbody").find(">tr").length;
    var sum_x = 0;

    for (i = 0; i < x; i++) {
        var z = $(".simple_esimate_table_contents").find("tbody").find("tr").eq(i).find("td").eq(6).find("input").val()
        z = z.replace(/[,]+/g, '');
        sum_x = sum_x + Number(z);
    }

    $(".simple_esimate_table_contents tfoot").find("tr").eq(0).find("th").eq(1).text(comma(sum_x));

    var y = $(".order_table_contents tbody").find(">tr").length;
    var sum_y = 0;

    for (i = 0; i < y; i++) {
            var z = $(".order_table_contents").find("tbody").find("tr").eq(i).find("td").eq(6).find("input").val()
            z = z.replace(/[,]+/g, '');
            sum_y = sum_y + Number(z);
    }



    $(".order_table_contents tfoot").find("tr").eq(0).find("th").eq(1).text(comma(sum_y));

}
// 납품 견적서 총합계 함수 END
/***************************************************** 납품 견적서 END **************************************************************************/
/***************************************************** 납품 견적서 END **************************************************************************/
/***************************************************** 납품 견적서 END **************************************************************************/













/***************************************************** 공사 견적서 START **************************************************************************/
/***************************************************** 공사 견적서 START **************************************************************************/
/***************************************************** 공사 견적서 START **************************************************************************/


/******************************** 공사 견적서 계산 함수 START **************************************************/
//공사 견적서 갑지 총합계 함수 START
function construction_tabs_main_price_sum(obj) {

    let x = $(".construction_quotation_table_contents").find("tfoot").find(".door").length;
    let y = $(".construction_quotation_table_contents").find("tbody").find("tr").length;
    let sum = 0;
    let sum2 = 0;

    for (let i = 0; i < x; i++) {
        let z = $(".construction_quotation_table_contents").find("tfoot").find(".door").eq(i).find("td").eq(7).find("input").val();
        z = z.replace(/[,]+/g, '');
        sum = sum + Number(z);
    }

    for (let i = 0; i < y; i++) {
        let z = $(".construction_quotation_table_contents").find("tbody").find("tr").eq(i).find("td").eq(7).find("input").val();
        z = z.replace(/[,]+/g, '');
        sum2 = sum2 + Number(z);
    }


    $(".construction_quotation_table_contents tfoot").find(".sum").find("th").eq(1).text(comma(sum + sum2));
}
//공사 견적서 갑지 총합계 함수 END


//공사 견적서 갑지 수량 * 단가 = 공급가액 함수 START
function construction_tabs_main_price(obj) {
    let x = $(obj).parent().parent().find("td:eq(4)").find("input").val();
    let y = $(obj).parent().parent().find("td:eq(6)").find("input").val();
    x = x.replace(/[,]+/g, '');
    y = y.replace(/[,]+/g, '');

    var sum;

    if (x == "" || y == "") {
        sum = null;
    } else {
        sum = Number(x) * Number(y);
        sum = comma(sum)
    }

    $(obj).parent().parent().find("td:eq(7)").find("input").val(sum);
    $(obj).parent().parent().find("td:eq(7)").find("input").trigger("change");

}
//공사 견적서 갑지 수량 * 단가 = 공급가액 함수 END


//공사 견적서 상세페이지 수량 * 단가 = 공급가액 함수 START
function construction_tabs_con_price(obj) {
    let x = $(obj).parent().parent().find("td:eq(3)").find("input").val();
    let y = $(obj).parent().parent().find("td:eq(5)").find("input").val();
    x = x.replace(/[,]+/g, '');
    y = y.replace(/[,]+/g, '');

    let sum;

    if (x == "" || y == "") {
        sum = null;
    } else {
        sum = Number(x) * Number(y);
        sum = comma(sum)
    }

    $(obj).parent().parent().find("td:eq(6)").find("input").val(sum);
    $(obj).parent().parent().find("td:eq(6)").find("input").trigger("change");
    $(obj).closest("table").find("tfoot").find("tr").eq(0).find("td").eq(2).trigger("change");
    $(obj).closest("table").find("tbody").eq(0).find("tr").eq(1).find("td").eq(6).find("input").trigger("change");
    $(obj).closest("table").find("tbody").eq(0).find("tr").eq(1).find("td").eq(5).find("input").trigger("change");

}
//공사 견적서 상세페이지 수량 * 단가 = 공급가액 함수 END

//공사 견적서 상세페이지 공급가액 / 수량 = 단가 함수 START
function construction_tabs_con_price_division(obj) {
    let x = $(obj).parent().parent().find("td:eq(3)").find("input").val();
    let y = $(obj).parent().parent().find("td:eq(6)").find("input").val();
    x = x.replace(/[,]+/g, '');
    y = y.replace(/[,]+/g, '');

    var sum;

    if (x == "" || y == "") {
        sum = null;

    } else {
        sum = Number(y) / Number(x);
        sum = comma(Math.round(sum));
    }

    $(obj).parent().parent().find("td:eq(5)").find("input").val(sum);
}
//공사 견적서 상세페이지 공급가액 / 수량 = 단가 함수 END


//공사 견적서 상세페이지 합계 함수 START
function construction_tabs_con_price_sum(obj) {

    let x = $(obj).closest("tbody").find(">tr").length;
    let sum = 0;

    for (let i = 1; i < x - 1; i++) {
        let z = $(obj).closest("tbody").find("tr").eq(i).find("td").eq(6).find("input").val()
        z = z.replace(/[,]+/g, '');
        sum = sum + Number(z);
    }

    $(obj).closest("tbody").find("tr").eq(x - 1).find("td").eq(2).text(comma(sum));
}
//공사 견적서 상세페이지 합계 함수 END

//공사 견적서 상세페이지 총합계 함수 START
function construction_tabs_con_price_sumall(obj) {
    let x = $(obj).closest("table").find("tbody").length;
    let sum = 0;

    for (let i = 1; i < x; i++) {
        let y = $(obj).closest("table").find("tbody").eq(i).find("tr").length;
        let z = $(obj).closest("table").find("tbody").eq(i).find("tr").eq(y - 1).find("td").eq(2).html();
        z = z.replace(/[,]+/g, '');
        sum = sum + Number(z);
    }

    $(obj).closest("tbody").eq(0).find("tr").eq(1).find("td").eq(6).find("input").val(comma(sum));
    $(obj).closest("tfoot").find("tr").eq(0).find("td").eq(2).text(comma(sum));
}
//공사 견적서 상세페이지 총합계 함수 END

//공사 견적서 상세페이지 -> 공사 견적서 갑지 이동 START
function con_quitaiondata_move_main(obj) {

    let num = $(obj).closest("table").parent().attr("id");
    let num_number = num.substr(3, num.length - 3);
    let q = $("#tab-main").find(".construction_quotation_table_contents").find("tbody").find("tr").length;

    for (let i = 0; i < q; i++) {

        let z = $("#tab-main").find(".construction_quotation_table_contents").find("tbody").find("tr").eq(i).find("button[name=con_add]").data("button");
        let z_number = z.substr(3, z.length - 3);

        if (num_number == z_number) {

            for (let h = 2; h < 9; h++) {

                let x = $(obj).parent().parent().parent().find("tr").eq(1).find("td").eq(h - 1).find("input").val();


                $("#tab-main").find(".construction_quotation_table_contents").find("tbody").find("tr").eq(i).find("td").eq(h).find("input").val(x);


            }
            $("#tab-main").find(".construction_quotation_table_contents").find("tbody").find("tr").eq(i).find("td").eq(7).find("input").trigger("change");
        }
    }
}
//공사 견적서 상세페이지 -> 공사 견적서 갑지 이동 END
/******************************** 공사 견적서 계산 함수 END **************************************************/



/******************************** 공사 견적서 페이지 함수 START **************************************************/

//공사 신규 행추가, 특기사항 autosize START
$(document).ready(function () {



    $(document).on("click", ".construction_quotation_table_contents button[name='con_door_add']", function () {

        $(this).parent().parent().after($("#con_door_AddrowContent").val());

    });


    $(document).on("click", ".construction_quotation_table_contents button[name='con_door_delete']", function () {
        if ($(this).parent().parent().parent().find(".door").length > 1) {
            $(this).parent().parent().remove();
            $(".construction_quotation_table_contents").find("tfoot").find("tr").eq(1).find("td:eq(6)").find("input").trigger("change");
        }

    });

    $(document).on("click", "button[name='con_page_add']", function () {
        $(this).parent().parent().after($("#con_AddrowContent").val());
    });

    $(document).on("click", "button[name='con_page_delete']", function () {
        if ($(this).closest("tbody").find("tr").length > 4) {
            let x = $(this).closest("tbody");
            $(this).parent().parent().remove();
            x.find("tr").eq(1).find("td:eq(5)").find("input").trigger("change");
        }
    });

        $(document).on("click", "button[name='con_page_add2']", function () {
            $(this).parent().parent().after($("#con_AddrowContent2").val());
        });

    autosize($(".construction_quotation_table_contents tfoot textarea"));
    $(".construction_quotation_table_contents tfoot textarea").attr("spellcheck", false);


});
//공사 신규 행추가, 특기사항 autosize END


/* 공사 견적서 갑지 탭 추가 삭제 기능 */
$(document).ready(function () {
    var i = 1;

    $(".construction_quotation_main .tabs_con .tab_content").eq(1).html($(".construction_quotation_main .construction_quotation_main_hiddendiv").clone().html());


    $(document).on("click", ".construction_quotation_table_contents button[name='con_add']", function (e) {

        i++;

        var $nav = $(".construction_quotation_main .tabs_nav .tab_li");

        var $nav_len = $nav.length;
        var $con = $(".construction_quotation_main .tabs_con .tab_content");
        var $con_len = $con.length;

        var btndata = e.target.dataset.button;
        var btndata2 = btndata.substr(3, btndata.length - 3);

        //갑지 옆 탭 페이지 추가
        for (let j = 1; j < $nav_len; j++) {
            if ($nav[j].getAttribute("id") == btndata) {
                $(".construction_quotation_main .tabs_nav").find("li").eq(j).after('<li class="tab_li" data-tab=tab' + i + ' id=btn' + i + ' ></li>');
            }
        };

        //갑지 옆 탭 페이지 이름 재배치
        for (let j = 1; j < $nav_len + 1; j++) {
            $(".construction_quotation_main .tabs_nav").find("li").eq(j).html(j + "page");

        }


        //상세 내용 페이지 추가
        for (let j = 1; j < $con_len; j++) {
            if ($con[j].getAttribute("id").substr(3, $con[j].getAttribute("id").length - 3) == btndata2) {


                x = $(".construction_quotation_main .construction_quotation_main_hiddendiv").clone().html();
                $con.eq(j).after('<div class="tab_content"  id="tab' + i + '">' + x + '</div >');
            }

        };

        var $con = $(".construction_quotation_main .tabs_con .tab_content");
        var $con_len = $con.length;

        //상세 내용 페이지 이름 재배치
        for (let j = 1; j < $con_len; j++) {
            $con.eq(j).find("table").find("thead").find("tr").eq(0).find("th").eq(0).text("상 세 내 역 서 - page" + j);


        }

        //갑지 행 추가
        $(this).parent().parent().after(


            '<tr class="const"><td class="center"></td><td><input  readonly></td><td><input type="text" readonly></td><td><input type="text" readonly></td><td><input type="text" onkeyup="inputNumberFormat(this);"onkeydown="inputNumberFormat(this);" onchange="inputNumberFormat(this); " class="input_right" readonly></td><td><input type="text" readonly></td><td><input type="text" onkeyup="inputNumberFormat(this); "onkeydown="inputNumberFormat(this); " onchange="inputNumberFormat(this); " class="input_right" readonly></td><td><input type="text" class="input_right" onchange="construction_tabs_main_price_sum(this)" readonly></td><td><input type="text" readonly></td><td style="text-align: center; border: 0;"><button class=" w-btn-gra1 w-btn-gra-anim w-btn-small" name="con_add" style="width: 30px;" data-button="btn' + i + '">+</button> <button class=" w-btn-gra1 w-btn-gra-anim w-btn-small" name="con_delete" style="width: 30px;" data-button="btn' + i + '">-</button></td></tr>'
        );

        //갑지 행 번호 재배치
        for (let j = 1; j < $nav_len + 1; j++) {
            $(this).closest("tbody").find("tr").eq(j - 1).find("td").eq(1).find("input").val(j);
        }

    });

    $(document).on("click", ".construction_quotation_table_contents button[name='con_delete']", function (e) {

        var $nav = $(".construction_quotation_main .tabs_nav .tab_li");
        var $nav_len = $nav.length;
        var $con = $(".construction_quotation_main .tabs_con .tab_content");
        var $con_len = $con.length;


        var btndata = e.target.dataset.button;
        var btndata2 = btndata.substr(3, btndata.length - 3);


        if ($(this).parent().parent().parent().find(".const").length > 1) {

            //갑지 행 삭제
            $(this).parent().parent().remove();
            $(".construction_quotation_table_contents").find("tfoot").find("tr").eq(1).find("td:eq(6)").find("input").trigger("change");

            //갑지 옆 탭 페이지 삭제
            for (let j = 1; j < $nav_len; j++) {
                if ($nav[j].getAttribute("id") == btndata) {
                    $(".construction_quotation_main .tabs_nav .tab_li").eq(j).remove();
                }
            }

            //갑지 옆 탭 이름 재배치
            for (let j = 1; j < $nav_len; j++) {
                $(".tabs_nav").find("li").eq(j).html(j + "page");
            }


            //상세 내용 페이지 삭제
            for (let j = 1; j < $con_len; j++) {
                if ($con[j].getAttribute("id").substr(3, $con[j].getAttribute("id").length - 3) == btndata2) {
                    $(".construction_quotation_main .tabs_con .tab_content").eq(j).remove();

                }

            }

            var $con = $(".construction_quotation_main .tabs_con .tab_content");
            var $con_len = $con.length;

            //상세 내용 페이지 이름 재배치
            for (let j = 1; j < $con_len; j++) {
                $con.eq(j).find("table").find("thead").find("tr").eq(0).find("th").eq(0).text("상 세 내 역 서 - page" + j);


            }

            //갑지 행 이름 재배치
            for (let j = 1; j < $nav_len; j++) {
                $(".construction_quotation_table_contents tbody").find("tr").eq(j - 1).find("td").eq(1).find("input").val(j);
            }

        }

    });

});// 공사 견적서 행추가 제거 버튼 */


/* 공사 견적서 갑지 탭 기능 */
$(document).ready(function () {
    $(document).on("click", ".construction_quotation_main .tabs_nav .tab_li", function (e) {

        var $nav = $(".construction_quotation_main .tabs_nav .tab_li");
        var $con = $(".construction_quotation_main .tabs_con .tab_content");

        var datatab = e.target.dataset.tab;

        $nav.removeClass("active");
        $(this).addClass("active");

        $con.removeClass("active");

        for (let j = 0; j < $con.length; j++) {
            if ($con[j].getAttribute("id") == datatab) {
                $con[j].classList.add("active");

            }
        }

    });

})


/******************************** 공사 견적서 페이지 함수 END **************************************************/

// 공사 견적서 PDF저장 START
function pdf_down() {
    $(".construction_quotation_main .tabs_con .tab_content").addClass("active");
    window.print();
    window.onafterprint = pdf_after();
}

function pdf_after() {
    $(".construction_quotation_main .tabs_con .tab_content").removeClass("active");
    $(".construction_quotation_main .tabs_con #tab-main").addClass("active");
}
// 공사 견적서 PDF저장 END
/***************************************************** 공사 견적서 END **************************************************************************/
/***************************************************** 공사 견적서 END **************************************************************************/
/***************************************************** 공사 견적서 END **************************************************************************/







/***************************************************** 공통 START **************************************************************************/
/***************************************************** 공통 START **************************************************************************/
/***************************************************** 공통 START **************************************************************************/
// 엔터키와 방향키로 input 이동 START
$(document).on("keydown", "input", function (e) {


    let tr_idx = $(this).parent().parent().index();
    let td_idx = $(this).parent().index();


    if (e.keyCode === 13 || e.keyCode === 40) {

        $(this).parent().parent().parent().find("tr:eq(" + (tr_idx + 1) + ")").find("td:eq(" + (td_idx) + ")").find("input").focus();

    };


    if (tr_idx > 0) {
        if (e.keyCode === 38) {

            $(this).parent().parent().parent().find("tr:eq(" + (tr_idx - 1) + ")").find("td:eq(" + (td_idx) + ")").find("input").focus();

        };
    };


});
// 엔터키와 방향키로 input 이동 END

// 체크박스 체크시 전체 체크(발주서만들기용) START
$(document).on('click', '.input_check_all', function (e) {
    if ($(this).closest("table").find('.input_check_all').is(':checked')) {
        $(this).closest("table").find('.input_check').prop('checked', true);
    } else {
        $(this).closest("table").find('.input_check').prop('checked', false);
    }
});
// 체크박스 체크시 전체 체크(발주서만들기용) END

// 콤마 붙이는 함수 START
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};
// 콤마 붙이는 함수 END

// 콤마 없애는 함수 START
function uncomma(str) {

        str = String(str);
        return str.replace(/[,]/g, '');


};
// 콤마 없애는 함수 END

// INPUT에 콤마 적용 함수 START
function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
};
// INPUT에 콤마 적용 함수 END

/***************************************************** 공통 END **************************************************************************/
/***************************************************** 공통 END **************************************************************************/
/***************************************************** 공통 END **************************************************************************/