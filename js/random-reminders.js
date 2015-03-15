(function () {
    var tipsData;
    Tabletop.init({
        key: '17X3C9F3r78gjx58QW58zbrDNmPrZlwp7K3a3_XqC9yo',
        callback: function(response, tabletop) {
            console.log(response);
            tipsData = response;
        }
    });

    $('.btn-tips').click(function (e) {
        e.preventDefault();

        var item = getRandom(tipsData.CategoryTips.elements);
        var element = $('#tips-modal');

        element.find('.modal-body').html(item.Reminder);

        element.modal();
    });

    setInterval(function () {
        var item = getRandom(tipsData.MonthlyTips.elements);
        var element = $('#monthly-modal');

        element.find('.modal-title span').html(
            tipsData.Months.elements[parseInt(item.Month)].Month);
        element.find('.modal-body').html(item.Reminder);

        element.modal();
    }, 20000);

    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    function getRandom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
})();