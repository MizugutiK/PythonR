$(document).ready(function() {
    // ボタンがクリックされた時の処理
    $("#shoot-button").click(function() {
        // サーバーにスコアを更新するリクエストを送信
        $.ajax({
            type: "GET",
            url: "/button_pressed", // スコアを増やすために10を渡す
            success: function(response) {
                // サーバーからのレスポンスを処理してスコアを更新
                $("#score").text(response.score);
                console.log(response);
            }
        });
    });
});
