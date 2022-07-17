const cpHolder = $("#contextPathHolder").attr("data-contextPath") ? $("#contextPathHolder").attr("data-contextPath") : "";

function sendAjaxGet(url, sendData, callback, param = "", _async = true, _return = false) {
    if (_return) {
        let value;
        $.ajax({
            url: url,
            type: 'GET',
            contentType: 'application/json',
            data: sendData,
            dataType: 'json',
            async: false,
            success: function (response) {
                callback(response, param);
                value = response;
            },
            error: function (message) {
                localStorage.removeItem('gpDate');
                console.log('error in ajax return: ');
                console.log(message);
                if (confirm('데이터 조회 중 오류가 발생하였습니다.\n장시간 페이지 이동이 없어 세션이 만료 되었을 수 있습니다.\n확인을 누르시면 페이지를 리로드 합니다.')) {
                    location.reload();
                }
            }
        });
        return value;
    } else {
        $.ajax({
            url: url,
            type: 'GET',
            contentType: 'application/json',
            data: sendData,
            dataType: 'json',
            async: _async,
            success: function (response) {
                callback(response, param);
            },
            error: function (message) {
                localStorage.removeItem('gpDate');
                console.log('error in ajax return: ');
                console.log(message);
                if (confirm('데이터 조회 중 오류가 발생하였습니다.\n장시간 페이지 이동이 없어 세션이 만료 되었을 수 있습니다.\n확인을 누르시면 페이지를 리로드 합니다.')) {
                    location.reload();
                }
            }
        });
    }
}
function sendAjaxPost(url, sendData, callback, param = "", _async = true, _return = false) {
    if (_return) {
        let value;
        $.ajax({
            url: url,
            type: 'POST',
            data: sendData,
            contentType: 'application/json',
            dataType: 'json',
            async: false,
            success: function (response) {
                callback(response);
                value = response;
            },
            error: function (message) {
                localStorage.removeItem('gpDate');
                console.log('error in ajax return: ');
                console.log(message);
                if (confirm('데이터 조회 중 오류가 발생하였습니다.\n장시간 페이지 이동이 없어 세션이 만료 되었을 수 있습니다.\n확인을 누르시면 페이지를 리로드 합니다.')) {
                    location.reload();
                }
            }
        });
        return value;
    } else {
        $.ajax({
            url: url,
            type: 'POST',
            data: sendData,
            contentType: 'application/json',
            dataType: 'json',
            async: _async,
            success: function (response) {
                callback(response);
            },
            error: function (message) {
                localStorage.removeItem('gpDate');
                console.log('error in ajax return: ');
                console.log(message);
                if (confirm('데이터 조회 중 오류가 발생하였습니다.\n장시간 페이지 이동이 없어 세션이 만료 되었을 수 있습니다.\n확인을 누르시면 페이지를 리로드 합니다.')) {
                    location.reload();
                }
            }
        });
    }
}
function sendAjaxPut(url, sendData, callback, param = "", _async = true, _return = false) {
    if (_return) {
        let value;
        $.ajax({
            url: url,
            type: 'PUT',
            contentType: 'application/json',
            data: sendData,
            dataType: 'json',
            async: false,
            success: function (response) {
                callback(response);
                value = response;
            },
            error: function (message) {
                localStorage.removeItem('gpDate');
                console.log('error in ajax return: ');
                console.log(message);
                if (confirm('데이터 조회 중 오류가 발생하였습니다.\n장시간 페이지 이동이 없어 세션이 만료 되었을 수 있습니다.\n확인을 누르시면 페이지를 리로드 합니다.')) {
                    location.reload();
                }
            }
        });
        return value;
    } else {
        $.ajax({
            url: url,
            type: 'PUT',
            contentType: 'application/json',
            data: sendData,
            dataType: 'json',
            async: _async,
            success: function (response) {
                callback(response);
            },
            error: function (message) {
                localStorage.removeItem('gpDate');
                console.log('error in ajax return: ');
                console.log(message);
                if (confirm('데이터 조회 중 오류가 발생하였습니다.\n장시간 페이지 이동이 없어 세션이 만료 되었을 수 있습니다.\n확인을 누르시면 페이지를 리로드 합니다.')) {
                    location.reload();
                }
            }
        });
    }
}
function sendAjaxDelete(url, sendData, callback, param = "", _async = true, _return = false) {
    if (_return) {
        let value;
        $.ajax({
            url: url,
            type: 'DELETE',
            contentType: 'application/json',
            data: sendData,
            dataType: 'json',
            async: false,
            success: function (response) {
                callback(response);
                value = response;
            },
            error: function (message) {
                localStorage.removeItem('gpDate');
                console.log('error in ajax return: ');
                console.log(message);
                if (confirm('데이터 조회 중 오류가 발생하였습니다.\n장시간 페이지 이동이 없어 세션이 만료 되었을 수 있습니다.\n확인을 누르시면 페이지를 리로드 합니다.')) {
                    location.reload();
                }
            }
        });
        return value;
    } else {
        $.ajax({
            url: url,
            type: 'DELETE',
            data: sendData,
            contentType: 'application/json',
            dataType: 'json',
            async: _async,
            success: function (response) {
                callback(response);
            },
            error: function (message) {
                localStorage.removeItem('gpDate');
                console.log('error in ajax return: ');
                console.log(message);
                if (confirm('데이터 조회 중 오류가 발생하였습니다.\n장시간 페이지 이동이 없어 세션이 만료 되었을 수 있습니다.\n확인을 누르시면 페이지를 리로드 합니다.')) {
                    location.reload();
                }
            }
        });
    }
}
// Datatable 공통
const Datatables = {
    basic: function (target, tableOption, num) {
        let table = $(target).DataTable({
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print'
            ],
            columnDefs: tableOption.columnDefs,
            columns: tableOption.columns,
            dom: 'Bfrtip',
            pageLength: 3,
            responsive: true
        });

        return table;
    },
    rowsAdd: function (table, url, sendData) {
        table.clear();
        const callback = function (data) {
            table.rows.add(data).draw();
        }
        sendAjax(url, sendData, callback)
    },
    refresh: function (table, data) {
        table.clear();
        table.rows.add(data).draw();
    },
    addRowNumber: function (table) {
        table.on('order.dt search.dt', function () {
            table.column(0, {search: 'applied', order: 'applied'}).nodes().each(function (cell, i) {
                cell.innerHTML = i + 1;
            })
        });
    }
};

// 스트링 배열, 값 으로 json데이터 리턴
function arrayJson(strArry, dataArry){
    let data = {}
    for(let i=0; i < strArry.length; i++){
        if(dataArry[i] !== "") data[strArry[i]] = dataArry[i];
    }
    return data;
}
