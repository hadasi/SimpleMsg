var Simple = (function(module) {

	module.Now = function(resultObject) {
		resultObject.html('<br />' + GetDate() + '<br /><br /><br />　　' + GetComment());
	};

	return module;
} (Simple || {}));


function GetDate()
{
	var weeks = new Array('日', '月', '火', '水', '木', '金', '土');

	//. 日付の取得
	var dt = new Date();
	//. 日付の分離
	var year   = dt.getFullYear();
	var month  = dt.getMonth() + 1;
	var date   = dt.getDate();
	var week   = weeks[dt.getDay()];
	var hour   = dt.getHours();
	var minute = dt.getMinutes();
	var second = dt.getSeconds();

	//. 1桁のとき「0」を付けて2桁にします
	if (month < 10)
	{	month = "0" + month;   }
	if (date < 10)
	{	date = "0" + date;   }
	if (hour < 10)
	{	hour = "0" + hour;   }
	if (minute < 10)
	{	minute = "0" + minute;   }
	if (second < 10)
	{	second = "0" + second;   }

    //. フォームを整形します
    return year + "/" + month + "/" + date + " (" + week + ") " + hour + ":" + minute + "." + second;
};

function GetComment()
{
	//. かお
	var kao = new Array("(´-`)", "(o^^)o", "(´3`)", "(^・^)", "(^o^ゞ", "(-.-)", "( ^^)/", "o(^v^)o", "(^-^)", "(#^.^#)");
	//. コメント
	var com = new Array("ふぬ～", "おほっ", "ぽょ", "もふっ", "ナハッ", "あいゃ", "ほぃ～", "ぐふふ", "うふっ", "てへっ");

	//. 0～9 の乱数を取得
	var Rnd = Math.floor(Math.random() * 10);

	return "<span style='font-size:200%;'>" + kao[Rnd] + "</span>　" + com[Rnd];
}
