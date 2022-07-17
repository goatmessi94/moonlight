/* 설치 타입 선택 기능 */
$(function () {
    var wrap = $('.calcu_head_radio01 label > input, .calcu_head_radio02 label > input, .calcu_head_radio03 label > input');
    var radio01 = $('.calcu_head_radio01 label input');
    var radio02 = $('.calcu_head_radio02 label input');
    var radio03 = $('.calcu_head_radio03 label input');
    var board = $('.calcu_cont_board .board');
    var type = $('.calcu_cont_type .type');
    board.hide();
    type.hide();
    wrap.click(function (e) {
        $('[name=calcu_outputForm] #calcu_outputTable tr,[name=calcu_outputForm] .submit').remove();
        var idx1 = $('input[name="head_radio01"]:checked').parent().index();
        var idx2 = $('input[name="head_radio02"]:checked').parent().index();
        var idx3 = $('input[name="head_radio03"]:checked').parent().index();
        var table = $("#calcu_MainTable tr");

        table.remove();
        $("#calcu_MainTable").append(board.eq(idx1).val());
        $("#calcu_MainTable").append(type.eq(idx2).find(".type2").eq(idx3).val());

    })
    radio01.parent().find("input:checked").trigger('click');
    radio01.parent().eq(0).trigger('click');
    radio02.parent().eq(0).trigger('click');
    radio03.parent().eq(0).trigger('click');
    radio01.parent().find("input:checked").trigger('click');
});// 설치 타입 선택 기능



/* 간단파이프타입 분진망 체크 활성화 및 해제 */
function checksimplePeDisable(obj) {
    if (obj.simple_pipe_pe_check.checked == 1) {
        obj.simple_pipe_pe_length.disabled = false;
        $(obj).find('[name=pe_td]').attr('class', 'head');
    } else if (obj.simple_pipe_pe_check.checked == 0) {
        obj.simple_pipe_pe_length.disabled = true;
        obj.simple_pipe_pe_length.value = "";
        $(obj).find('[name=pe_td]').attr('class', 'head_disable');
    }
}// 간단파이프타입 분진망 체크 활성화 및 해제

/* 상세파이프타입 분진망 체크 활성화 및 해제 */
function checkPeDisable(obj) {
    obj.detail_pipe_pe_length.disabled = true;

    if (obj.detail_pipe_pe_check.checked == true) {
        obj.detail_pipe_pe_length.disabled = false;
        $(obj).find('[name=pe_td]').attr('class', 'head');


    } else if (obj.detail_pipe_pe_check.checked == false) {

        obj.detail_pipe_pe_length.disabled = true;
        obj.detail_pipe_pe_length.value = "";
        $(obj).find('[name=pe_td]').attr('class', 'head_disable');
    }
}// 상세파이프타입 분진망 체크 활성화 및 해제



/* 상세파이프타입 앞 레일빔 체크 활성화 및 해제 */
function checkFrontRailDisable(obj) {
    if (obj.front_rail_check.checked == true) {
        obj.front_rail_size2.disabled = false;
        obj.front_rail_size1.disabled = false;
        obj.detail_pipe_front_rail.disabled = false;
        obj.front_rail_elec_elec.disabled = false;
        obj.front_rail_elec_beamclamp.disabled = false;
        obj.front_rail_elec_elec.checked = true;
        obj.detail_pipe_front_pipe.disabled = true;
        obj.detail_pipe_front_pipe.value = "";
        $(obj).find('[name=front_rail_td]').attr('class', 'head');
        $(obj).find('[name=front_pipe_td]').attr('class', 'head_disable');

    } else if (obj.front_rail_check.checked == false) {
        obj.front_rail_size1.disabled = true;
        obj.front_rail_size2.disabled = true;
        obj.front_rail_size1.value = "";
        obj.front_rail_size2.value = "";
        obj.front_rail_elec_elec.disabled = true;
        obj.front_rail_elec_beamclamp.disabled = true;
        obj.front_rail_elec_elec.checked = false;
        obj.front_rail_elec_beamclamp.checked = false;
        obj.detail_pipe_front_rail.disabled = true;
        obj.detail_pipe_front_rail.value = "";
        obj.detail_pipe_front_pipe.disabled = false;
        obj.detail_pipe_front_pipe.value = "주주경간동일";
        $(obj).find('[name=front_pipe_td]').attr('class', 'head');
        $(obj).find('[name=front_rail_td]').attr('class', 'head_disable');
    }
}// 상세파이프타입 앞 레일빔 체크 활성화 및 해제



/* 상세파이프타입 뒷 레일빔 체크 활성화 및 해제 */
function checkBackRailDisable(obj) {
    if (obj.back_rail_check.checked == true) {
        obj.detail_pipe_back_rail.disabled = false;
        obj.back_rail_size1.disabled = false;
        obj.back_rail_size2.disabled = false;
        $(obj).find('[name=back_rail_td]').attr('class', 'head');
    } else if (obj.back_rail_check.checked == false) {
        obj.detail_pipe_back_rail.disabled = true;
        obj.back_rail_size1.disabled = true;
        obj.back_rail_size2.disabled = true;
        obj.detail_pipe_back_rail.value = "";
        obj.back_rail_size1.value = "";
        obj.back_rail_size2.value = "";
        $(obj).find('[name=back_rail_td]').attr('class', 'head_disable');
    }
}// 상세파이프타입 뒷 레일빔 체크 활성화 및 해제










/* 상세파이프타입 보조2 체크 활성화 및 해제 */
function checkDisable(obj) {
    if (obj.assis2_check.checked == true) {
        obj.detail_pipe_assis2.disabled = false;
        obj.detail_pipe_assis2_span.disabled = false;
        $(obj).find('[name=assis2_td]').attr('class', 'head');
        $(obj).find('[name=assis2Span_td]').attr('class', 'head');
    } else if (obj.assis2_check.checked == false) {
        obj.detail_pipe_assis2.disabled = true;
        obj.detail_pipe_assis2_span.disabled = true;
        obj.detail_pipe_assis2.value = "";
        obj.detail_pipe_assis2_span.value = "";
        $(obj).find('[name=assis2_td]').attr('class', 'head_disable');
        $(obj).find('[name=assis2Span_td]').attr('class', 'head_disable');
    }
}// 상세파이프타입 보조2 체크 활성화 및 해제

/* 상세파이프타입 보조3 체크 활성화 및 해제 */
function checkDisable2(obj) {
    if (obj.assis3_check.checked == true) {
        obj.detail_pipe_assis3.disabled = false;
        obj.detail_pipe_assis3_span.disabled = false;
        $(obj).find('[name=assis3_td]').attr('class', 'head');
        $(obj).find('[name=assis3Span_td]').attr('class', 'head');
    } else if (obj.assis3_check.checked == false) {
        obj.detail_pipe_assis3.disabled = true;
        obj.detail_pipe_assis3_span.disabled = true;
        obj.detail_pipe_assis3.value = "";
        obj.detail_pipe_assis3_span.value = "";
        $(obj).find('[name=assis3_td]').attr('class', 'head_disable');
        $(obj).find('[name=assis3Span_td]').attr('class', 'head_disable');
    }
}// 상세파이프타입 보조3 체크 활성화 및 해제

/* 상세파이프타입 연결대 체크 활성화 및 해제 */
function checkDisable3(obj) {
    if (obj.conPipe_check.checked == true) {
        obj.connect_pipe.disabled = false;
        obj.connect_pipe_span.disabled = false;
        $(obj).find('[name=conPipe_td]').attr('class', 'head');
        $(obj).find('[name=conPipeSpan_td]').attr('class', 'head');
    } else if (obj.conPipe_check.checked == false) {
        obj.connect_pipe.disabled = true;
        obj.connect_pipe_span.disabled = true;
        obj.connect_pipe.value = "";
        obj.connect_pipe_span.value = "";
        $(obj).find('[name=conPipe_td]').attr('class', 'head_disable');
        $(obj).find('[name=conPipeSpan_td]').attr('class', 'head_disable');
    }
}// 상세파이프타입 연결대 체크 활성화 및 해제

/* 상세파이프타입 연결대2 체크 활성화 및 해제 */
function checkDisable4(obj) {
    if (obj.conPipe2_check.checked == true) {
        obj.connect_pipe2.disabled = false;
        obj.connect_pipe_span2.disabled = false;
        $(obj).find('[name=conPipe2_td]').attr('class', 'head');
        $(obj).find('[name=conPipe2Span_td]').attr('class', 'head');
    } else if (obj.conPipe2_check.checked == false) {
        obj.connect_pipe2.disabled = true;
        obj.connect_pipe_span2.disabled = true;
        obj.connect_pipe2.value = "";
        obj.connect_pipe_span2.value = "";
        $(obj).find('[name=conPipe2_td]').attr('class', 'head_disable');
        $(obj).find('[name=conPipe2Span_td]').attr('class', 'head_disable');
    }
}// 상세파이프타입 연결대2 체크 활성화 및 해제



/************************************************ 수량 산출 버튼 ***************************************************/
function calculation2() {

    var form = $(".calcu_form");

    /*BOARD */
    var egi_height = form.find("input[name=egi_height]").val(); //EGI높이
    var egi_thick = form.find("input[name=egi_thick]").val(); //EGI두께
    var egi_hole = form.find("input[name=egi_hole]").val(); //EGI홀갯수
    var rpp_height = form.find("input[name=rpp_height]").val(); //RPP높이
    var rpp_type = form.find("select[name=rpp_type]").val(); //RPP타입
    var steel_height = form.find("input[name=steel_height]").val(); //STEEL높이
    var trans_height = form.find("input[name=trans_height]").val(); //TRANS높이

    /*전체 공통 */
    var length = uncomma(form.find("input[name=length]").val()); // 시공길이 // 공통
    var board_condition = form.find("select[name=board_condition]").val(); //보드상태 // 공통
    var pipe_condition = form.find("select[name=pipe_condition]").val(); //파이프상태 // 공통
    var clamp_condition = form.find("select[name=clamp_condition]").val(); //클램프상태 // 공통
    var pipe_thick = form.find("select[name=pipe_thick]").val(); //파이프두께
    var simple_pipe_pile = form.find("input[name=simple_pipe_pile]").val(); //말뚝길이
    var detail_pipe_pile = form.find("input[name=detail_pipe_pile]").val(); //말뚝길이

    /*SIMPLE PIPE */
    var simple_pipe_pe_length = form.find("input[name=simple_pipe_pe_length]").val(); //분진망높이
    var simple_pipe_dan = form.find("input[name=simple_pipe_dan]").val(); //횡대단수
    var simple_pipe_land_height = form.find("input[name=simple_pipe_land_height]").val(); //주주길이
    var simple_pipe_assis_height = form.find("input[name=simple_pipe_assis_height]").val(); //보조길이
    var simple_pipe_span = form.find("input[name=simple_pipe_span]").val(); //경간
    var simple_pipe_assis_span = form.find("select[name=simple_pipe_assis_span]").val(); //보조경간


    /*DETAIL PIPE */
    var detail_pipe_pe_length = form.find("input[name=detail_pipe_pe_length]").val(); //분진망높이
    var detail_pipe_dan = form.find("input[name=detail_pipe_dan]").val(); //횡대단수
    var detail_pipe_land_height = form.find("input[name=detail_pipe_land_height]").val(); //주주길이
    var detail_pipe_land_span = form.find("input[name=detail_pipe_land_span]").val(); //주주경간
    var detail_pipe_front_pipe = form.find("input[name=detail_pipe_front_pipe]").val(); //앞 말뚝
    var detail_pipe_front_rail = uncomma2(form.find("input[name=detail_pipe_front_rail]").val()); //앞 레일빔
    var front_rail_size1 = form.find("input[name=front_rail_size1]").val(); //앞 레일빔 규격1
    var front_rail_size2 = form.find("input[name=front_rail_size2]").val(); //앞 레일빔 규격2
    var front_rail_elec = form.find("input[name=front_rail_elec]:checked").val(); //앞 레일빔 주주 용접여부
    var detail_pipe_assis_height = form.find("input[name=detail_pipe_assis_height]").val(); //보조길이
    var detail_pipe_assis_span = form.find("input[name=detail_pipe_assis_span]").val(); //보조경간
    var detail_pipe_back_pipe_span = form.find("input[name=detail_pipe_back_pipe_span]").val(); //뒷 말뚝경간
    var detail_pipe_back_rail = uncomma2(form.find("input[name=detail_pipe_back_rail]").val()); //뒷 레일빔
    var back_rail_size1 = form.find("input[name=back_rail_size1]").val(); //뒷 레일빔 규격1
    var back_rail_size2 = form.find("input[name=back_rail_size2]").val(); //뒷 레일빔 규격2

    var detail_pipe_assis2 = form.find("input[name=detail_pipe_assis2]").val(); //보조2 길이
    var detail_pipe_assis2_span = form.find("input[name=detail_pipe_assis2_span]").val(); //보조2 경간
    var detail_pipe_assis3 = form.find("input[name=detail_pipe_assis3]").val(); //보조3 길이
    var detail_pipe_assis3_span = form.find("input[name=detail_pipe_assis3_span]").val(); //보조3 경간

    var connect_pipe = form.find("input[name=connect_pipe]").val(); //연결대 길이
    var connect_pipe_span = form.find("input[name=connect_pipe_span]").val(); //연결대 경간
    var connect_pipe2 = form.find("input[name=connect_pipe2]").val(); //연결대2 길이
    var connect_pipe_span2 = form.find("input[name=connect_pipe_span2]").val(); //연결대2 경간


    /*SIMPLE beam */
    var simple_beam_dan = form.find("input[name=simple_beam_dan]").val(); //횡대단수
    var simple_beam_land_height = form.find("input[name=simple_beam_land_height]").val(); //H빔 주주 높이
    var simple_beam_land_pile = form.find("input[name=simple_beam_land_pile]").val(); //H빔 근입
    var simple_beam_land_span = form.find("input[name=simple_beam_land_span]").val(); //H빔 경간
    var simple_beam_pile = form.find("input[name=simple_beam_pile]").val(); //H빔 경간
    var simple_beam_pile = form.find("input[name=simple_beam_pile]").val(); //말뚝 길이
    var simple_beam_land_size1 = form.find("input[name=simple_beam_land_size1]").val(); //주주H빔 규격1
    var simple_beam_land_size2 = form.find("input[name=simple_beam_land_size2]").val(); //주주H빔 규격2
    var simple_beam_land_condition = form.find("select[name=simple_beam_land_condition]").val(); //H빔 상태
    var simpe_beam_pe_pipe = form.find("input[name=simpe_beam_pe_pipe]").val(); //파이프 타입 분진망
    var simpe_beam_pe_beam = form.find("input[name=simpe_beam_pe_beam]").val(); //빔 타입 분진망


    $('#calcu_outputTable').find("thead").remove();
    $('#calcu_outputTable').find("tbody").remove();
    $('#calcu_outputTable').append('<thead><tr><td>품명</td><td>규격</td><td>수량</td><td>단위</td><td>단가</td><td>공급가</td><td>비고</td></tr></thead><tbody></tbody>');

    //RPP
    if (rpp_height !== undefined && rpp_type !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>RPP' + rpp_type + '</td><td>670mm＊30t＊' + rpp_height + 'M＊' + comma((Math.ceil(Number(length) / 0.67))) + '장</td><td>' + comma((Number(length) * Number(rpp_height))) + '</td><td>M<sup>2</sup></td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + board_condition + '</td></tr>'
        );
    }


    //EGI
    if (egi_height !== undefined && egi_thick !== undefined && egi_hole !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>EGI휀스</td><td>530mm＊' + egi_thick + 't＊H' + egi_height + 'm</td><td>' + comma((Math.ceil(Number(length) / 0.53))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + board_condition + '</td></tr>'
        );

        $('#calcu_outputTable tbody').append(
            '<tr><td>후크볼트</td><td></td><td>' + comma((Math.ceil(Number(length) / 0.53) * Number(egi_hole))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>신재</td></tr>'
        );
    }

    //스틸판
    if (steel_height !== undefined) {


        $('#calcu_outputTable tbody').append(
            '<tr><td>스틸방음판</td><td>500＊1980</td><td>' + comma(Number(length) * Number(steel_height)) + '</td><td>M<sup>2</sup></td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + board_condition + '</td></tr>'
        );
    }

    //투명판
    if (trans_height !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>투명방음판</td><td>500＊1980</td><td>' + comma(Number(length) * Number(trans_height)) + '</td><td>M<sup>2</sup></td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + board_condition + '</td></tr>'
        );
    }

    //횡대파이프 pipe_simple
    if (simple_pipe_dan !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 횡대</td><td>48.6Φ＊' + pipe_thick + 't＊6M</td><td>' + comma(Math.ceil(length / 6) * simple_pipe_dan) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //주주파이프 pipe_simple
    if (simple_pipe_land_height !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 주주</td><td>48.6Φ＊' + pipe_thick + 't＊' + simple_pipe_land_height + 'M</td><td>' + comma(Math.ceil(length / simple_pipe_span + 1)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //보조파이프 pipe_simple
    if (simple_pipe_assis_height !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 보조</td><td>48.6Φ＊' + pipe_thick + 't＊' + simple_pipe_assis_height + 'M</td><td>' + comma(Math.ceil(Math.ceil((length / simple_pipe_span) + 1) / simple_pipe_assis_span)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //기초파이프 pipe_simple
    if (simple_pipe_pile !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 말뚝</td><td>48.6Φ＊' + pipe_thick + 't＊' + simple_pipe_pile + 'M</td><td>' + comma((Math.ceil(length / simple_pipe_span + 1) + (Math.ceil(Math.ceil(length / simple_pipe_span + 1) / simple_pipe_assis_span)))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>고재</td></tr>'
        );
    }


    //연결핀 pipe_simple
    if (simple_pipe_dan !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>연결핀</td><td></td><td>' + comma(Math.ceil(length / 6) * simple_pipe_dan) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //고정클램프 pipe_simple
    if (simple_pipe_land_height !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>클램프</td><td>고정</td><td>' + comma((Math.ceil(length / simple_pipe_span + 1)) * (simple_pipe_dan * 1 + 1)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //자동클램프 pipe_simple
    if (simple_pipe_land_height !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>클램프</td><td>자동</td><td>' + comma(Math.ceil(Math.ceil((length / simple_pipe_span) + 1) / simple_pipe_assis_span) * 2) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //분진망 pipe_simple
    if (simple_pipe_pe_length !== "" && simple_pipe_pe_length !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>분진망</td><td></td><td>' + comma(Math.ceil(length / 50)) + '</td><td>EA</td><td></td><td><input type="text" readonly></td><td>신재</td></tr>'
        );

    }


    //횡대파이프 pipe_detail
    if (detail_pipe_dan !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 횡대</td><td>48.6Φ＊' + pipe_thick + 't＊6M</td><td>' + comma((Math.ceil(length / 6) * detail_pipe_dan)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //주주파이프 pipe_detail
    if (detail_pipe_land_height !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 주주</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_land_height + 'M</td><td>' + comma((Math.ceil(length / detail_pipe_land_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //보조파이프 pipe-detail
    if (detail_pipe_assis_height !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 보조</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_assis_height + 'M</td><td>' + comma((Math.ceil(length / detail_pipe_assis_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //보조파이프2 pipe-detail
    if (detail_pipe_assis2 !== undefined && detail_pipe_assis2 !== "") {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 보조2</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_assis2 + 'M</td><td>' + comma((Math.ceil(length / detail_pipe_assis2_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //보조파이프3 pipe-detail
    if (detail_pipe_assis3 !== undefined && detail_pipe_assis3 !== "") {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 보조3</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_assis3 + 'M</td><td>' + comma((Math.ceil(length / detail_pipe_assis3_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //연결대 pipe-detail
    if (connect_pipe !== undefined && connect_pipe !== "") {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 연결대</td><td>48.6Φ＊' + pipe_thick + 't＊' + connect_pipe + 'M</td><td>' + comma((Math.ceil(length / connect_pipe_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //연결대2 pipe-detail
    if (connect_pipe2 !== undefined && connect_pipe2 !== "") {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 연결대2</td><td>48.6Φ＊' + pipe_thick + 't＊' + connect_pipe2 + 'M</td><td>' + comma((Math.ceil(length / connect_pipe_span2 + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //기초파이프 pipe-detail
    if (detail_pipe_pile !== undefined) {

        if (detail_pipe_front_pipe !== "" && detail_pipe_back_pipe_span !== "") {
            $('#calcu_outputTable tbody').append(
                '<tr><td>단관파이프 - 밀뚝</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_pile + 'M</td><td>' + comma(((Math.ceil(length / detail_pipe_land_span + 1) + Math.ceil(length / detail_pipe_back_pipe_span + 1)))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>고재</td></tr>'
            );

        } else if (detail_pipe_front_pipe !== "" && detail_pipe_back_pipe_span == "") {
            $('#calcu_outputTable tbody').append(
                '<tr><td>단관파이프 - 밀뚝</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_pile + 'M</td><td>' + comma((Math.ceil(length / detail_pipe_land_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>고재</td></tr>'
            );

        } else if (detail_pipe_front_pipe == "" && detail_pipe_back_pipe_span !== "") {
            $('#calcu_outputTable tbody').append(
                '<tr><td>단관파이프 - 밀뚝</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_pile + 'M</td><td>' + comma((Math.ceil(length / detail_pipe_back_pipe_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>고재</td></tr>'
            );

        }



    }
    //연결핀 pipe-detail
    if (detail_pipe_dan !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>연결핀</td><td></td><td>' + comma((Math.ceil(length / 6) * detail_pipe_dan)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //고정클램프 pipe-detail
    if (detail_pipe_land_height !== undefined) {
        if (detail_pipe_front_pipe) {
            var front_pipe_fixclamp = Math.ceil(length / detail_pipe_land_span + 1)
        } else {
            var front_pipe_fixclamp = 0;
        }

        if (connect_pipe_span) {
            var conpipe_fixclamp = Math.ceil(length / connect_pipe_span + 1)

        } else {
            var conpipe_fixclamp = 0;
        }

        if (connect_pipe_span2) {
            var conpipe2_fixclamp = Math.ceil(length / connect_pipe_span2 + 1)

        } else {
            var conpipe2_fixclamp = 0;
        }

        $('#calcu_outputTable tbody').append(
            '<tr><td>클램프</td><td>고정</td><td>' + comma(((Math.ceil(length / detail_pipe_land_span + 1) * detail_pipe_dan) + Number(front_pipe_fixclamp)  + Number(conpipe_fixclamp) + Number(conpipe2_fixclamp))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }


    //자동클램프 pipe-detail
    if (detail_pipe_land_height !== undefined) {

        if (detail_pipe_assis_span) {
            if (detail_pipe_back_pipe_span) {
                var assis_autoclamp = Math.ceil(length / detail_pipe_assis_span + 1) * 2
            } else {
                var assis_autoclamp = Math.ceil(length / detail_pipe_assis_span + 1)
            }


        } else {
            var assis_autoclamp = 0;

        }

        if (detail_pipe_assis2_span) {
            if (detail_pipe_back_pipe_span) {
                var assis2_autoclamp = Math.ceil(length / detail_pipe_assis2_span + 1) * 2
            } else {
                var assis2_autoclamp = Math.ceil(length / detail_pipe_assis2_span + 1)
            }

        } else {
            var assis2_autoclamp = 0;
        }

        if (detail_pipe_assis3_span) {
            if (detail_pipe_back_pipe_span) {
                var assis3_autoclamp = Math.ceil(length / detail_pipe_assis3_span + 1) * 2
            } else {
                var assis3_autoclamp = Math.ceil(length / detail_pipe_assis3_span + 1)
            }

        } else {
            var assis3_autoclamp = 0;
        }


        if (connect_pipe_span) {
            var conpipe_autoclamp = Math.ceil(length / connect_pipe_span + 1)

        } else {
            var conpipe_autoclamp = 0;
        }

        if (connect_pipe_span2) {
            var conpipe2_autoclamp = Math.ceil(length / connect_pipe_span2 + 1)

        } else {
            var conpipe2_autoclamp = 0;
        }

        $('#calcu_outputTable tbody').append(
            '<tr><td>클램프</td><td>자동</td><td>' + comma(((Number(assis_autoclamp) + Number(assis2_autoclamp) + Number(assis3_autoclamp) + Number(conpipe_autoclamp) + Number(conpipe2_autoclamp)))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //빔클램프 pipe-detail
    if (detail_pipe_land_height !== undefined) {

        if (front_rail_elec == 1) {
            $('#calcu_outputTable tbody').append(
                '<tr><td>빔클램프</td><td>고정</td><td>' + comma(Math.ceil(length / detail_pipe_land_span + 1)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
            );

        }

    }

    //앞 레일빔 pipe-detail
    if (detail_pipe_front_rail !== undefined && detail_pipe_front_rail !== "") {
        console.log(detail_pipe_front_rail);

        $('#calcu_outputTable tbody').append(
            '<tr><td>앞 레일빔</td><td>' + front_rail_size1 + '＊' + front_rail_size2 + '＊' + comma(detail_pipe_front_rail) + 'M</td><td>' + comma(hbeam_size_table(Number(front_rail_size1), Number(front_rail_size2)) * detail_pipe_front_rail) + '</td><td>kg</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td></td></tr>'
        );

    }

    //뒷 레일빔 pipe-detail
    if (detail_pipe_back_rail !== undefined && detail_pipe_back_rail !== "") {
        console.log(typeof form.find("input[name=detail_pipe_front_rail]").val())
        $('#calcu_outputTable tbody').append(
            '<tr><td>뒷 레일빔</td><td>' + back_rail_size1 + '＊' + back_rail_size2 + '＊' + comma(detail_pipe_back_rail) + 'M</td><td>' + comma(hbeam_size_table(Number(back_rail_size1), Number(back_rail_size2)) * detail_pipe_back_rail) + '</td><td>kg</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td></td></tr>'
        );

    }

    //분진망 pipe-detail
    if (detail_pipe_pe_length !== "" && detail_pipe_pe_length !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>분진망</td><td></td><td>' + comma((Math.ceil(length / 50))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>신재</td></tr>'
        );

    }

    //H빔 주주 beam_simple
    if (simple_beam_land_height !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>H빔</td><td>' + simple_beam_land_size1 + '＊' + simple_beam_land_size2 + '＊' + (Number(simple_beam_land_height) + Number(simple_beam_land_pile)) + 'M＊' + comma(Math.ceil(length / simple_beam_land_span + 1)) + '본</td><td>' + comma(Math.ceil(Math.ceil(length / simple_beam_land_span + 1) * (Number(simple_beam_land_height) + Number(simple_beam_land_pile)) * hbeam_size_table(Number(simple_beam_land_size1), Number(simple_beam_land_size2)))) + '</td><td>kg</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + simple_beam_land_condition + '</td></tr>'
        );
    }

    //횡대파이프 beam_simple
    if (simple_beam_dan !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 횡대</td><td>48.6Φ＊' + pipe_thick + 't＊6M</td><td>' + comma((Math.ceil(length / 6) * simple_beam_dan)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }



    //기초파이프 beam_simple
    if (simple_beam_pile !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 말뚝</td><td>48.6Φ＊' + pipe_thick + 't＊' + simple_beam_pile + 'M</td><td>' + comma(Math.ceil(length / simple_beam_land_span + 1) * 2) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>고재</td></tr>'
        );
    }

    //연결핀 beam_simple
    if (simple_beam_dan !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>연결핀</td><td></td><td>' + comma((Math.ceil(length / 6) * simple_beam_dan)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //싱글클램프 beam_simple
    if (simple_beam_land_height !== undefined) {
        if (simpe_beam_pe_pipe !== "" && simpe_beam_pe_pipe !== undefined) {
            $('#calcu_outputTable tbody').append(
                '<tr><td>클램프</td><td>싱글</td><td>' + comma(Math.ceil(length / simple_beam_land_span + 1) * (simple_beam_dan - 1)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
            );

        } else {
            $('#calcu_outputTable tbody').append(
                '<tr><td>클램프</td><td>싱글</td><td>' + comma(Math.ceil(length / simple_beam_land_span + 1) * simple_beam_dan) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
            );
        }


    }

    //고정클램프 beam_simple
    if (simple_beam_land_height !== undefined) {
        if (simpe_beam_pe_pipe !== "" && simpe_beam_pe_pipe !== undefined) {
            $('#calcu_outputTable tbody').append(
                '<tr><td>클램프</td><td>고정</td><td>' + comma((Math.ceil(length / simple_beam_land_span + 1) * 2) + (Math.ceil(length / simple_beam_land_span + 1) * 3)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
            );

        } else {
            $('#calcu_outputTable tbody').append(
                '<tr><td>클램프</td><td>고정</td><td>' + comma(Math.ceil(length / simple_beam_land_span + 1) * 2) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
            );
        }


    }

    //분진망 파이프타입 beam_simple
    if (simpe_beam_pe_pipe !== "" && simpe_beam_pe_pipe !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 분진망주주</td><td>48.6Φ＊' + pipe_thick + 't＊3M</td><td>' + comma(Math.ceil(length / simple_beam_land_span + 1)) + '</td><td>EA</td><td></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
        $('#calcu_outputTable tbody').append(
            '<tr><td>분진망</td><td></td><td>' + comma(Math.ceil(length / 50)) + '</td><td>EA</td><td></td><td><input type="text" readonly></td><td>신재</td></tr>'
        );


    }

    //분진망 빔타입 beam_simple
    if (simpe_beam_pe_beam !== "" && simpe_beam_pe_beam !== undefined) {


        $('#calcu_outputTable tbody').append(
            '<tr><td>분진망</td><td></td><td>' + comma(Math.ceil(length / 50)) + '</td><td>EA</td><td></td><td><input type="text" readonly></td><td>신재</td></tr>'
        );
    }

    $('[name=calcu_outputForm] .submit').remove()



    $('[name=calcu_outputForm]').append(
        '<div class="submit"><button type="button" onclick="construction_tabs_con_esimate_make()">견적서 만들기</button></div>'
    );

}

/************************************************ 수량 산출 버튼 ***************************************************/
function calculation() {

    var form = $(".calcu_form");

    /*BOARD */
    var egi_height = form.find("input[name=egi_height]").val(); //EGI높이
    var egi_thick = form.find("input[name=egi_thick]").val(); //EGI두께
    var egi_hole = form.find("input[name=egi_hole]").val(); //EGI홀갯수
    var rpp_height = form.find("input[name=rpp_height]").val(); //RPP높이
    var rpp_type = form.find("select[name=rpp_type]").val(); //RPP타입
    var steel_height = form.find("input[name=steel_height]").val(); //STEEL높이
    var trans_height = form.find("input[name=trans_height]").val(); //TRANS높이

    /*전체 공통 */
    var length = uncomma(form.find("input[name=length]").val()); // 시공길이 // 공통
    var board_condition = form.find("select[name=board_condition]").val(); //보드상태 // 공통
    var pipe_condition = form.find("select[name=pipe_condition]").val(); //파이프상태 // 공통
    var clamp_condition = form.find("select[name=clamp_condition]").val(); //클램프상태 // 공통
    var pipe_thick = form.find("select[name=pipe_thick]").val(); //파이프두께
    var simple_pipe_pile = form.find("input[name=simple_pipe_pile]").val(); //말뚝길이
    var detail_pipe_pile = form.find("input[name=detail_pipe_pile]").val(); //말뚝길이

    /*SIMPLE PIPE */
    var simple_pipe_pe_length = form.find("input[name=simple_pipe_pe_length]").val(); //분진망높이
    var simple_pipe_dan = form.find("input[name=simple_pipe_dan]").val(); //횡대단수
    var simple_pipe_land_height = form.find("input[name=simple_pipe_land_height]").val(); //주주길이
    var simple_pipe_assis_height = form.find("input[name=simple_pipe_assis_height]").val(); //보조길이
    var simple_pipe_span = form.find("input[name=simple_pipe_span]").val(); //경간
    var simple_pipe_assis_span = form.find("select[name=simple_pipe_assis_span]").val(); //보조경간


    /*DETAIL PIPE */
    var detail_pipe_pe_length = form.find("input[name=detail_pipe_pe_length]").val(); //분진망높이
    var detail_pipe_dan = form.find("input[name=detail_pipe_dan]").val(); //횡대단수
    var detail_pipe_land_height = form.find("input[name=detail_pipe_land_height]").val(); //주주길이
    var detail_pipe_land_span = form.find("input[name=detail_pipe_land_span]").val(); //주주경간
    var detail_pipe_front_pipe = form.find("input[name=detail_pipe_front_pipe]").val(); //앞 말뚝
    var detail_pipe_front_rail = uncomma2(form.find("input[name=detail_pipe_front_rail]").val()); //앞 레일빔
    var front_rail_size1 = form.find("input[name=front_rail_size1]").val(); //앞 레일빔 규격1
    var front_rail_size2 = form.find("input[name=front_rail_size2]").val(); //앞 레일빔 규격2
    var front_rail_elec = form.find("input[name=front_rail_elec]:checked").val(); //앞 레일빔 주주 용접여부
    var detail_pipe_assis_height = form.find("input[name=detail_pipe_assis_height]").val(); //보조길이
    var detail_pipe_assis_span = form.find("input[name=detail_pipe_assis_span]").val(); //보조경간
    var detail_pipe_back_pipe_span = form.find("input[name=detail_pipe_back_pipe_span]").val(); //뒷 말뚝경간
    var detail_pipe_back_rail = uncomma2(form.find("input[name=detail_pipe_back_rail]").val()); //뒷 레일빔
    var back_rail_size1 = form.find("input[name=back_rail_size1]").val(); //뒷 레일빔 규격1
    var back_rail_size2 = form.find("input[name=back_rail_size2]").val(); //뒷 레일빔 규격2

    var detail_pipe_assis2 = form.find("input[name=detail_pipe_assis2]").val(); //보조2 길이
    var detail_pipe_assis2_span = form.find("input[name=detail_pipe_assis2_span]").val(); //보조2 경간
    var detail_pipe_assis3 = form.find("input[name=detail_pipe_assis3]").val(); //보조3 길이
    var detail_pipe_assis3_span = form.find("input[name=detail_pipe_assis3_span]").val(); //보조3 경간

    var connect_pipe = form.find("input[name=connect_pipe]").val(); //연결대 길이
    var connect_pipe_span = form.find("input[name=connect_pipe_span]").val(); //연결대 경간
    var connect_pipe2 = form.find("input[name=connect_pipe2]").val(); //연결대2 길이
    var connect_pipe_span2 = form.find("input[name=connect_pipe_span2]").val(); //연결대2 경간


    /*SIMPLE beam */
    var simple_beam_dan = form.find("input[name=simple_beam_dan]").val(); //횡대단수
    var simple_beam_land_height = form.find("input[name=simple_beam_land_height]").val(); //H빔 주주 높이
    var simple_beam_land_pile = form.find("input[name=simple_beam_land_pile]").val(); //H빔 근입
    var simple_beam_land_span = form.find("input[name=simple_beam_land_span]").val(); //H빔 경간
    var simple_beam_pile = form.find("input[name=simple_beam_pile]").val(); //H빔 경간
    var simple_beam_pile = form.find("input[name=simple_beam_pile]").val(); //말뚝 길이
    var simple_beam_land_size1 = form.find("input[name=simple_beam_land_size1]").val(); //주주H빔 규격1
    var simple_beam_land_size2 = form.find("input[name=simple_beam_land_size2]").val(); //주주H빔 규격2
    var simple_beam_land_condition = form.find("select[name=simple_beam_land_condition]").val(); //H빔 상태
    var simpe_beam_pe_pipe = form.find("input[name=simpe_beam_pe_pipe]").val(); //파이프 타입 분진망
    var simpe_beam_pe_beam = form.find("input[name=simpe_beam_pe_beam]").val(); //빔 타입 분진망


    $('#calcu_outputTable').find("thead").remove();
    $('#calcu_outputTable').find("tbody").remove();
    $('#calcu_outputTable').append('<thead><tr><td>품명</td><td>규격</td><td>수량</td><td>단위</td><td>단가</td><td>공급가</td><td>비고</td></tr></thead><tbody></tbody>');

    //RPP
    if (rpp_height !== undefined && rpp_type !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>RPP' + rpp_type + '</td><td>670mm＊30t＊' + rpp_height + 'M＊' + comma((Math.ceil(Number(length) / 0.67))) + '장</td><td>' + comma((Number(length) * Number(rpp_height))) + '</td><td>M<sup>2</sup></td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + board_condition + '</td></tr>'
        );
    }


    //EGI
    if (egi_height !== undefined && egi_thick !== undefined && egi_hole !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>EGI휀스</td><td>530mm＊' + egi_thick + 't＊H' + egi_height + 'm</td><td>' + comma((Math.ceil(Number(length) / 0.53))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + board_condition + '</td></tr>'
        );

        $('#calcu_outputTable tbody').append(
            '<tr><td>후크볼트</td><td></td><td>' + comma((Math.ceil(Number(length) / 0.53) * Number(egi_hole))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>신재</td></tr>'
        );
    }

    //스틸판
    if (steel_height !== undefined) {


        $('#calcu_outputTable tbody').append(
            '<tr><td>스틸방음판</td><td>500＊1980</td><td>' + comma(Number(length) * Number(steel_height)) + '</td><td>M<sup>2</sup></td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + board_condition + '</td></tr>'
        );
    }

    //투명판
    if (trans_height !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>투명방음판</td><td>500＊1980</td><td>' + comma(Number(length) * Number(trans_height)) + '</td><td>M<sup>2</sup></td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + board_condition + '</td></tr>'
        );
    }

    //횡대파이프 pipe_simple
    if (simple_pipe_dan !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 횡대</td><td>48.6Φ＊' + pipe_thick + 't＊6M</td><td>' + comma(Math.ceil(length / 6) * simple_pipe_dan) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //주주파이프 pipe_simple
    if (simple_pipe_land_height !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 주주</td><td>48.6Φ＊' + pipe_thick + 't＊' + simple_pipe_land_height + 'M</td><td>' + comma(Math.ceil(length / simple_pipe_span + 1)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //보조파이프 pipe_simple
    if (simple_pipe_assis_height !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 보조</td><td>48.6Φ＊' + pipe_thick + 't＊' + simple_pipe_assis_height + 'M</td><td>' + comma(Math.ceil(Math.ceil((length / simple_pipe_span) + 1) / simple_pipe_assis_span)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //기초파이프 pipe_simple
    if (simple_pipe_pile !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 말뚝</td><td>48.6Φ＊' + pipe_thick + 't＊' + simple_pipe_pile + 'M</td><td>' + comma((Math.ceil(length / simple_pipe_span + 1) + (Math.ceil(Math.ceil(length / simple_pipe_span + 1) / simple_pipe_assis_span)))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>고재</td></tr>'
        );
    }


    //연결핀 pipe_simple
    if (simple_pipe_dan !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>연결핀</td><td></td><td>' + comma(Math.ceil(length / 6) * simple_pipe_dan) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //고정클램프 pipe_simple
    if (simple_pipe_land_height !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>클램프</td><td>고정</td><td>' + comma((Math.ceil(length / simple_pipe_span + 1)) * (simple_pipe_dan * 1 + 1)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //자동클램프 pipe_simple
    if (simple_pipe_land_height !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>클램프</td><td>자동</td><td>' + comma(Math.ceil(Math.ceil((length / simple_pipe_span) + 1) / simple_pipe_assis_span) * 2) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //분진망 pipe_simple
    if (simple_pipe_pe_length !== "" && simple_pipe_pe_length !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>분진망</td><td></td><td>' + comma(Math.ceil(length / 50)) + '</td><td>EA</td><td></td><td><input type="text" readonly></td><td>신재</td></tr>'
        );

    }


    //횡대파이프 pipe_detail
    if (detail_pipe_dan !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 횡대</td><td>48.6Φ＊' + pipe_thick + 't＊6M</td><td>' + comma((Math.ceil(length / 6) * detail_pipe_dan)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //주주파이프 pipe_detail
    if (detail_pipe_land_height !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 주주</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_land_height + 'M</td><td>' + comma((Math.ceil(length / detail_pipe_land_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //보조파이프 pipe-detail
    if (detail_pipe_assis_height !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 보조</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_assis_height + 'M</td><td>' + comma((Math.ceil(length / detail_pipe_assis_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //보조파이프2 pipe-detail
    if (detail_pipe_assis2 !== undefined && detail_pipe_assis2 !== "") {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 보조2</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_assis2 + 'M</td><td>' + comma((Math.ceil(length / detail_pipe_assis2_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //보조파이프3 pipe-detail
    if (detail_pipe_assis3 !== undefined && detail_pipe_assis3 !== "") {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 보조3</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_assis3 + 'M</td><td>' + comma((Math.ceil(length / detail_pipe_assis3_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //연결대 pipe-detail
    if (connect_pipe !== undefined && connect_pipe !== "") {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 연결대</td><td>48.6Φ＊' + pipe_thick + 't＊' + connect_pipe + 'M</td><td>' + comma((Math.ceil(length / connect_pipe_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //연결대2 pipe-detail
    if (connect_pipe2 !== undefined && connect_pipe2 !== "") {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 연결대2</td><td>48.6Φ＊' + pipe_thick + 't＊' + connect_pipe2 + 'M</td><td>' + comma((Math.ceil(length / connect_pipe_span2 + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }

    //기초파이프 pipe-detail
    if (detail_pipe_pile !== undefined) {

        if (detail_pipe_front_pipe !== "" && detail_pipe_back_pipe_span !== "") {
            $('#calcu_outputTable tbody').append(
                '<tr><td>단관파이프 - 밀뚝</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_pile + 'M</td><td>' + comma(((Math.ceil(length / detail_pipe_land_span + 1) + Math.ceil(length / detail_pipe_back_pipe_span + 1)))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>고재</td></tr>'
            );

        } else if (detail_pipe_front_pipe !== "" && detail_pipe_back_pipe_span == "") {
            $('#calcu_outputTable tbody').append(
                '<tr><td>단관파이프 - 밀뚝</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_pile + 'M</td><td>' + comma((Math.ceil(length / detail_pipe_land_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>고재</td></tr>'
            );

        } else if (detail_pipe_front_pipe == "" && detail_pipe_back_pipe_span !== "") {
            $('#calcu_outputTable tbody').append(
                '<tr><td>단관파이프 - 밀뚝</td><td>48.6Φ＊' + pipe_thick + 't＊' + detail_pipe_pile + 'M</td><td>' + comma((Math.ceil(length / detail_pipe_back_pipe_span + 1))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>고재</td></tr>'
            );

        }



    }
    //연결핀 pipe-detail
    if (detail_pipe_dan !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>연결핀</td><td></td><td>' + comma((Math.ceil(length / 6) * detail_pipe_dan)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //고정클램프 pipe-detail
    if (detail_pipe_land_height !== undefined) {
        if (detail_pipe_front_pipe) {
            var front_pipe_fixclamp = Math.ceil(length / detail_pipe_land_span + 1)
        } else {
            var front_pipe_fixclamp = 0;
        }

        if (connect_pipe_span) {
            var conpipe_fixclamp = Math.ceil(length / connect_pipe_span + 1)

        } else {
            var conpipe_fixclamp = 0;
        }

        if (connect_pipe_span2) {
            var conpipe2_fixclamp = Math.ceil(length / connect_pipe_span2 + 1)

        } else {
            var conpipe2_fixclamp = 0;
        }

        $('#calcu_outputTable tbody').append(
            '<tr><td>클램프</td><td>고정</td><td>' + comma(((Math.ceil(length / detail_pipe_land_span + 1) * detail_pipe_dan) + Number(front_pipe_fixclamp)  + Number(conpipe_fixclamp) + Number(conpipe2_fixclamp))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //자동클램프 pipe-detail
    if (detail_pipe_land_height !== undefined) {
        if (detail_pipe_assis_span) {
            if (detail_pipe_back_pipe_span) {
                var assis_autoclamp = Math.ceil(length / detail_pipe_assis_span + 1) * 2
            } else {
                var assis_autoclamp = Math.ceil(length / detail_pipe_assis_span + 1)
            }
        } else {
            var assis_autoclamp = 0;
        }

        if (detail_pipe_assis2_span) {
            if (detail_pipe_back_pipe_span) {
                var assis2_autoclamp = Math.ceil(length / detail_pipe_assis2_span + 1) * 2
            } else {
                var assis2_autoclamp = Math.ceil(length / detail_pipe_assis2_span + 1)
            }

        } else {
            var assis2_autoclamp = 0;
        }

        if (detail_pipe_assis3_span) {
            if (detail_pipe_back_pipe_span) {
                var assis3_autoclamp = Math.ceil(length / detail_pipe_assis3_span + 1) * 2
            } else {
                var assis3_autoclamp = Math.ceil(length / detail_pipe_assis3_span + 1)
            }

        } else {
            var assis3_autoclamp = 0;
        }


        if (connect_pipe_span) {
            var conpipe_autoclamp = Math.ceil(length / connect_pipe_span + 1)

        } else {
            var conpipe_autoclamp = 0;
        }

        if (connect_pipe_span2) {
            var conpipe2_autoclamp = Math.ceil(length / connect_pipe_span2 + 1)

        } else {
            var conpipe2_autoclamp = 0;
        }

        $('#calcu_outputTable tbody').append(
            '<tr><td>클램프</td><td>자동</td><td>' + comma(((Number(assis_autoclamp) + Number(assis2_autoclamp) + Number(assis3_autoclamp) + Number(conpipe_autoclamp) + Number(conpipe2_autoclamp)))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //빔클램프 pipe-detail
    if (detail_pipe_land_height !== undefined) {

        if (front_rail_elec == 1) {
            $('#calcu_outputTable tbody').append(
                '<tr><td>빔클램프</td><td>고정</td><td>' + comma(Math.ceil(length / detail_pipe_land_span + 1)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
            );

        }

    }

    //앞 레일빔 pipe-detail
    if (detail_pipe_front_rail !== undefined && detail_pipe_front_rail !== "") {

        $('#calcu_outputTable tbody').append(
            '<tr><td>앞 레일빔</td><td>' + front_rail_size1 + '＊' + front_rail_size2 + '＊' + comma(detail_pipe_front_rail) + 'M</td><td>' + comma(hbeam_size_table(Number(front_rail_size1), Number(front_rail_size2)) * detail_pipe_front_rail) + '</td><td>kg</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td></td></tr>'
        );

    }

    //뒷 레일빔 pipe-detail
    if ((detail_pipe_back_rail !== undefined && detail_pipe_back_rail !== "" )) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>뒷 레일빔</td><td>' + back_rail_size1 + '＊' + back_rail_size2 + '＊' + comma(detail_pipe_back_rail) + 'M</td><td>' + comma(hbeam_size_table(Number(back_rail_size1), Number(back_rail_size2)) * detail_pipe_back_rail) + '</td><td>kg</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td></td></tr>'
        );

    }

    //분진망 pipe-detail
    if (detail_pipe_pe_length !== "" && detail_pipe_pe_length !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>분진망</td><td></td><td>' + comma((Math.ceil(length / 50))) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>신재</td></tr>'
        );

    }

    //H빔 주주 beam_simple
    if (simple_beam_land_height !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>H빔</td><td>' + simple_beam_land_size1 + '＊' + simple_beam_land_size2 + '＊' + (Number(simple_beam_land_height) + Number(simple_beam_land_pile)) + 'M＊' + comma(Math.ceil(length / simple_beam_land_span + 1)) + '본</td><td>' + comma(Math.ceil(Math.ceil(length / simple_beam_land_span + 1) * (Number(simple_beam_land_height) + Number(simple_beam_land_pile)) * hbeam_size_table(Number(simple_beam_land_size1), Number(simple_beam_land_size2)))) + '</td><td>kg</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + simple_beam_land_condition + '</td></tr>'
        );
    }

    //횡대파이프 beam_simple
    if (simple_beam_dan !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 횡대</td><td>48.6Φ＊' + pipe_thick + 't＊6M</td><td>' + comma((Math.ceil(length / 6) * simple_beam_dan)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
    }



    //기초파이프 beam_simple
    if (simple_beam_pile !== undefined) {
        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 말뚝</td><td>48.6Φ＊' + pipe_thick + 't＊' + simple_beam_pile + 'M</td><td>' + comma(Math.ceil(length / simple_beam_land_span + 1) * 2) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>고재</td></tr>'
        );
    }

    //연결핀 beam_simple
    if (simple_beam_dan !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>연결핀</td><td></td><td>' + comma((Math.ceil(length / 6) * simple_beam_dan)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
        );
    }

    //싱글클램프 beam_simple
    if (simple_beam_land_height !== undefined) {
        if (simpe_beam_pe_pipe !== "" && simpe_beam_pe_pipe !== undefined) {
            $('#calcu_outputTable tbody').append(
                '<tr><td>클램프</td><td>싱글</td><td>' + comma(Math.ceil(length / simple_beam_land_span + 1) * (simple_beam_dan - 1)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
            );

        } else {
            $('#calcu_outputTable tbody').append(
                '<tr><td>클램프</td><td>싱글</td><td>' + comma(Math.ceil(length / simple_beam_land_span + 1) * simple_beam_dan) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
            );
        }


    }

    //고정클램프 beam_simple
    if (simple_beam_land_height !== undefined) {
        if (simpe_beam_pe_pipe !== "" && simpe_beam_pe_pipe !== undefined) {
            $('#calcu_outputTable tbody').append(
                '<tr><td>클램프</td><td>고정</td><td>' + comma((Math.ceil(length / simple_beam_land_span + 1) * 2) + (Math.ceil(length / simple_beam_land_span + 1) * 3)) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
            );

        } else {
            $('#calcu_outputTable tbody').append(
                '<tr><td>클램프</td><td>고정</td><td>' + comma(Math.ceil(length / simple_beam_land_span + 1) * 2) + '</td><td>EA</td><td><input type="text" readonly></td><td><input type="text" readonly></td><td>' + clamp_condition + '</td></tr>'
            );
        }


    }

    //분진망 파이프타입 beam_simple
    if (simpe_beam_pe_pipe !== "" && simpe_beam_pe_pipe !== undefined) {

        $('#calcu_outputTable tbody').append(
            '<tr><td>단관파이프 - 분진망주주</td><td>48.6Φ＊' + pipe_thick + 't＊3M</td><td>' + comma(Math.ceil(length / simple_beam_land_span + 1)) + '</td><td>EA</td><td></td><td><input type="text" readonly></td><td>' + pipe_condition + '</td></tr>'
        );
        $('#calcu_outputTable tbody').append(
            '<tr><td>분진망</td><td></td><td>' + comma(Math.ceil(length / 50)) + '</td><td>EA</td><td></td><td><input type="text" readonly></td><td>신재</td></tr>'
        );


    }

    //분진망 빔타입 beam_simple
    if (simpe_beam_pe_beam !== "" && simpe_beam_pe_beam !== undefined) {


        $('#calcu_outputTable tbody').append(
            '<tr><td>분진망</td><td></td><td>' + comma(Math.ceil(length / 50)) + '</td><td>EA</td><td></td><td><input type="text" readonly></td><td>신재</td></tr>'
        );
    }

    $('[name=calcu_outputForm] .submit').remove()


    if ($(".simple_esimate_table").html() !== undefined) {
        $('[name=calcu_outputForm]').append(
            '<div class="submit"><button type="button" onclick="esimate_make()">견적서 만들기</button></div>'
        );
    }

    if ($(".order_table").html() !== undefined) {
        $('[name=calcu_outputForm]').append(
            '<div class="submit"><button type="button" onclick="order_esimate_make()">견적서 만들기</button></div>'
        );

    }


}








/* 빔타입 분진망 체크 활성화 및 해제*/
function checkBeamtypePe(obj) {
    if (obj.pe_beam_check.checked == true) {

        obj.simpe_beam_pe_beam.disabled = false;
        obj.simpe_beam_pe_pipe.disabled = true;
        obj.simpe_beam_pe_pipe.value = "";
        $(obj).find('[name=pe_beam_td]').attr('class', 'head');
        $(obj).find('[name=pe_pipe_td]').attr('class', 'head_disable');

    } else if (obj.pe_beam_check.checked == false) {

        obj.simpe_beam_pe_beam.disabled = true;
        obj.simpe_beam_pe_beam.value = "";
        obj.simpe_beam_pe_pipe.disabled = false;
        $(obj).find('[name=pe_pipe_td]').attr('class', 'head');
        $(obj).find('[name=pe_beam_td]').attr('class', 'head_disable');


    }
}// 빔타입 분진망 체크 활성화 및 해제


/* H빔 단중 계산 */
function hbeam_size_table_kg(obj) {

    $(obj).parent().parent().find("td").eq(4).text("");

    var size1 = $(obj).parent().parent().find("td").eq(1).find("input").eq(0).val();
    var size2 = $(obj).parent().parent().find("td").eq(1).find("input").eq(1).val();
    var result;


    if (size1 == "" || size2 == "") {
        result = null;

    } else {

        result = hbeam_size_table(size1, size2);
    }
    return $(obj).parent().parent().find("td").eq(4).text(result);


}// H빔 단중 계산


/* H빔 길이 계산 */
function hbeam_lengt_sum(obj) {

    $(obj).parent().parent().find("td").eq(5).text("");

    var up = $(obj).parent().parent().find("td").eq(1).find("input").val();
    var down = $(obj).parent().parent().find("td").eq(3).find("input").val();
    var result;

    result = Number(up) + Number(down);

    return $(obj).parent().parent().find("td").eq(5).text(result);
}// H빔 길이 계산


//공사견적서 견적서 만들기 버튼 START
function construction_tabs_con_esimate_make() {

    var $con = $(".construction_quotation_main .tabs_con .tab_content");
    var $con_len = $con.length;
    var x = $("#calcu_outputTable >tbody tr").length;

    for (i = 1; i < $con_len; i++) {

        if ($con[i].classList == "tab_content active") {

            var y = $con.eq(i).find(".construction_quotation_main_hiddendiv_head_table").find("tbody").eq(1).find("tr").length;
            var k = $("#calcu_MainTable").clone().html();
            var m = $("#calcu_MainTable").clone();

            $con.eq(i).find(".hiddendiv_foot").find(".hiddendiv_foot_table").remove();
            $con.eq(i).find(".hiddendiv_foot").append(m);
            $con.eq(i).find(".hiddendiv_foot").find("table").removeAttr("id");
            $con.eq(i).find(".hiddendiv_foot").find("table").attr("class", "hiddendiv_foot_table");

            for (j = 1; j < y - 2; j++) {
                $con.eq(i).find(".construction_quotation_main_hiddendiv_head_table").find("tbody").eq(1).find("tr").eq(1).remove();
            }

            for (k = 0; k < x + 1; k++) {
                $con.eq(i).find(".construction_quotation_main_hiddendiv_head_table").find("tbody").eq(1).find("tr").eq(0).after($("#con_AddrowContent").val());
            }


            for (p = 0; p < x; p++) {
                for (j = 0; j < 7; j++) {
                    $con.eq(i).find(".construction_quotation_main_hiddendiv_head_table").find("tbody").eq(1).find("tr").eq(p + 1).find("td").eq(j + 1).find("input").attr("value", $("#calcu_outputTable").find("tbody").find("tr").eq(p).find("td").eq(j).text());
                }
            }

        }

    }

    $("#toc-toggle").trigger('click');

}
//공사견적서 견적서 만들기 버튼 END


//납품견적서 견적서 만들기 버튼 START
function esimate_make() {
    var x = $("#calcu_outputTable >tbody tr").length;
    $(".simple_esimate_table_contents").find("tbody").find("tr").remove();

    for (i = 0; i < x + 2; i++) {
        $(".simple_esimate_table_contents").find("tbody").append($("#AddrowContent").val());
    }


    for (j = 0; j < x; j++) {
        for (i = 0; i < 7; i++) {

            $(".simple_esimate_table_contents").find("tbody").find("tr").eq(j).find("td").eq(i + 1).find("input").attr("value", $("#calcu_outputTable").find("tbody").find("tr").eq(j).find("td").eq(i).text());
        }

    }

    $("#toc-toggle").trigger('click');

}
//납품견적서 견적서 만들기 버튼 END


//발주서 견적서 만들기 버튼 START
function order_esimate_make() {
    var x = $("#calcu_outputTable >tbody tr").length;
    $(".order_table_contents").find("tbody").find("tr").remove();

    for (i = 0; i < x + 2; i++) {
        $(".order_table_contents").find("tbody").append($("#AddrowContent").val());
    }


    for (j = 0; j < x; j++) {
        for (i = 0; i < 7; i++) {

            $(".order_table_contents").find("tbody").find("tr").eq(j).find("td").eq(i + 1).find("input").attr("value", $("#calcu_outputTable").find("tbody").find("tr").eq(j).find("td").eq(i).text());
        }

    }

    $("#toc-toggle").trigger('click');

}
//발주서 견적서 만들기 버튼 END







































































/* 콤마 붙이는 함수*/
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};

/* 콤마 없애는 함수*/
function uncomma2(str) {

    if(typeof str !== "undefined"){
        str = String(str);
        return str.replace(/[,]/g, '');
    }



};


/* H빔 단중 */
function hbeam_size_table(size1, size2) {
    if (size1 == 100 && size2 == 50) {
        return 9.3;
    } else if (size1 == 100 && size2 == 100) {
        return 17.2;
    } else if (size1 == 125 && size2 == 60) {
        return 13.2;
    } else if (size1 == 125 && size2 == 125) {
        return 23.8;
    } else if (size1 == 150 && size2 == 75) {
        return 14.0;
    } else if (size1 == 148 && size2 == 100) {
        return 21.1;
    } else if (size1 == 150 && size2 == 150) {
        return 31.5;
    } else if (size1 == 175 && size2 == 90) {
        return 18.1;
    } else if (size1 == 175 && size2 == 175) {
        return 40.2;
    } else if (size1 == 198 && size2 == 99) {
        return 18.2;
    } else if (size1 == 200 && size2 == 100) {
        return 21.3;
    } else if (size1 == 194 && size2 == 150) {
        return 30.6;
    } else if (size1 == 200 && size2 == 200) {
        return 49.9;
    } else if (size1 == 200 && size2 == 204) {
        return 56.2;
    } else if (size1 == 208 && size2 == 202) {
        return 65.7;
    } else if (size1 == 248 && size2 == 124) {
        return 25.7;
    } else if (size1 == 250 && size2 == 125) {
        return 29.6;
    } else if (size1 == 244 && size2 == 175) {
        return 44.1;
    } else if (size1 == 244 && size2 == 252) {
        return 64.4;
    } else if (size1 == 248 && size2 == 249) {
        return 66.5;
    } else if (size1 == 250 && size2 == 250) {
        return 72.4;
    } else if (size1 == 250 && size2 == 255) {
        return 82.2;
    } else if (size1 == 298 && size2 == 149) {
        return 32.0;
    } else if (size1 == 300 && size2 == 150) {
        return 36.7;
    } else if (size1 == 294 && size2 == 200) {
        return 56.8;
    } else if (size1 == 298 && size2 == 201) {
        return 65.4;
    } else if (size1 == 294 && size2 == 302) {
        return 84.5;
    } else if (size1 == 298 && size2 == 299) {
        return 87.0;
    } else if (size1 == 300 && size2 == 300) {
        return 94.0;
    } else if (size1 == 300 && size2 == 305) {
        return 106;
    } else if (size1 == 304 && size2 == 301) {
        return 106;
    } else if (size1 == 310 && size2 == 305) {
        return 130;
    } else if (size1 == 310 && size2 == 310) {
        return 142;
    } else if (size1 == 346 && size2 == 174) {
        return 41.4;
    } else if (size1 == 350 && size2 == 175) {
        return 49.6;
    } else if (size1 == 354 && size2 == 176) {
        return 57.8;
    } else if (size1 == 336 && size2 == 249) {
        return 69.2;
    } else if (size1 == 340 && size2 == 250) {
        return 79.7;
    } else if (size1 == 338 && size2 == 351) {
        return 106;
    } else if (size1 == 344 && size2 == 348) {
        return 115;
    } else if (size1 == 344 && size2 == 354) {
        return 131;
    } else if (size1 == 350 && size2 == 350) {
        return 137;
    } else if (size1 == 350 && size2 == 357) {
        return 156;
    } else if (size1 == 396 && size2 == 199) {
        return 56.6;
    } else if (size1 == 400 && size2 == 200) {
        return 66.0;
    } else if (size1 == 390 && size2 == 300) {
        return 107;
    } else if (size1 == 388 && size2 == 402) {
        return 140;
    } else if (size1 == 394 && size2 == 398) {
        return 147;
    } else if (size1 == 394 && size2 == 405) {
        return 168;
    } else if (size1 == 400 && size2 == 400) {
        return 172;
    } else if (size1 == 400 && size2 == 408) {
        return 197;
    } else if (size1 == 406 && size2 == 403) {
        return 200;
    } else if (size1 == 414 && size2 == 405) {
        return 232;
    } else if (size1 == 428 && size2 == 407) {
        return 283;
    } else if (size1 == 458 && size2 == 417) {
        return 415;
    } else if (size1 == 498 && size2 == 432) {
        return 605;
    } else if (size1 == 446 && size2 == 199) {
        return 66.2;
    } else if (size1 == 450 && size2 == 200) {
        return 76.0;
    } else if (size1 == 434 && size2 == 299) {
        return 106;
    } else if (size1 == 440 && size2 == 300) {
        return 124;
    } else if (size1 == 496 && size2 == 199) {
        return 79.5;
    } else if (size1 == 500 && size2 == 200) {
        return 89.6;
    } else if (size1 == 506 && size2 == 201) {
        return 103;
    } else if (size1 == 482 && size2 == 300) {
        return 114;
    } else if (size1 == 488 && size2 == 300) {
        return 128;
    } else if (size1 == 596 && size2 == 199) {
        return 94.6;
    } else if (size1 == 600 && size2 == 200) {
        return 106;
    } else if (size1 == 606 && size2 == 201) {
        return 120;
    } else if (size1 == 612 && size2 == 202) {
        return 134;
    } else {
        return 0;
    }
}


