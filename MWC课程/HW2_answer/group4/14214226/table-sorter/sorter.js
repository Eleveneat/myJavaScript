window.onload = function () {
//点击what
var handle0 = function ()
{
	//选择todo中三列
var todo = document.getElementById("todo");
var tbody = todo.getElementsByTagName('tbody');
var tr = tbody[0].getElementsByTagName('tr');

var com1 = tr[0].getElementsByTagName('td');
var com2 = tr[1].getElementsByTagName('td');
var com3 = tr[2].getElementsByTagName('td');

var com =[com1,com2,com3];
var i,j;

function paixu(arr) {
	for ( i = 1 ; i<=3; i++ )
	{
		for ( j=2;j>=1;j--)
		{
			var a = arr[j][0].innerHTML;
			var b = arr[j-1][0].innerHTML;

			var c = arr[j][1].innerHTML;
			var d = arr[j-1][1].innerHTML;

			var e = arr[j][2].innerHTML;
			var f = arr[j-1][2].innerHTML;

			if (a<b)
			{
				arr[j][0].innerHTML = b;
				arr[j-1][0].innerHTML = a;

				arr[j][1].innerHTML = d;
				arr[j-1][1].innerHTML = c;

				arr[j][2].innerHTML = f;
				arr[j-1][2].innerHTML = e;
			}
		}
	}
	return arr;
}
com=paixu(com);

tr[0].getElementsByTagName('td')[0].innerHTML=com[0][0].innerHTML;
tr[1].getElementsByTagName('td')[0].innerHTML=com[1][0].innerHTML;
tr[2].getElementsByTagName('td')[0].innerHTML=com[2][0].innerHTML;
}

//点击when
var handle1 = function ()
{
//选择todo中三列
var todo = document.getElementById("todo");
var tbody = todo.getElementsByTagName('tbody');
var tr = tbody[0].getElementsByTagName('tr');

var com1 = tr[0].getElementsByTagName('td');
var com2 = tr[1].getElementsByTagName('td');
var com3 = tr[2].getElementsByTagName('td');

var com =[com1,com2,com3];


var i,j;

function paixu(arr) {
	for ( i = 1 ; i<=3; i++ )
	{
		for ( j=2;j>=1;j--)
		{
			var a = arr[j][0].innerHTML;
			var b = arr[j-1][0].innerHTML;

			var c = arr[j][1].innerHTML;
			var d = arr[j-1][1].innerHTML;

			var e = arr[j][2].innerHTML;
			var f = arr[j-1][2].innerHTML;

			if (c<d)
			{
				arr[j][0].innerHTML = b;
				arr[j-1][0].innerHTML = a;

				arr[j][1].innerHTML = d;
				arr[j-1][1].innerHTML = c;

				arr[j][2].innerHTML = f;
				arr[j-1][2].innerHTML = e;
			}
		}
	}
	return arr;
}
com=paixu(com);

tr[0].getElementsByTagName('td')[1].innerHTML=com[0][1].innerHTML;
tr[1].getElementsByTagName('td')[1].innerHTML=com[1][1].innerHTML;
tr[2].getElementsByTagName('td')[1].innerHTML=com[2][1].innerHTML;
}

//点击location
var handle2 = function ()
{
	//选择todo中三列
var todo = document.getElementById("todo");
var tbody = todo.getElementsByTagName('tbody');
var tr = tbody[0].getElementsByTagName('tr');

var com1 = tr[0].getElementsByTagName('td');
var com2 = tr[1].getElementsByTagName('td');
var com3 = tr[2].getElementsByTagName('td');

var com =[com1,com2,com3];


var i,j;

function paixu(arr) {
	for ( i = 1 ; i<=3; i++ )
	{
		for ( j=2;j>=1;j--)
		{
			var a = arr[j][0].innerHTML;
			var b = arr[j-1][0].innerHTML;

			var c = arr[j][1].innerHTML;
			var d = arr[j-1][1].innerHTML;

			var e = arr[j][2].innerHTML;
			var f = arr[j-1][2].innerHTML;

			if (e<f)
			{
				arr[j][0].innerHTML = b;
				arr[j-1][0].innerHTML = a;

				arr[j][1].innerHTML = d;
				arr[j-1][1].innerHTML = c;

				arr[j][2].innerHTML = f;
				arr[j-1][2].innerHTML = e;
			}
		}
	}
	return arr;
}
com=paixu(com);

tr[0].getElementsByTagName('td')[2].innerHTML=com[0][2].innerHTML;
tr[1].getElementsByTagName('td')[2].innerHTML=com[1][2].innerHTML;
tr[2].getElementsByTagName('td')[2].innerHTML=com[2][2].innerHTML;
}

//点击first name
var chuli0 = function ()
{
	//选择todo中三列
var staff = document.getElementById("staff");
var tbody = staff.getElementsByTagName('tbody');
var tr = tbody[0].getElementsByTagName('tr');

var com1 = tr[0].getElementsByTagName('td');
var com2 = tr[1].getElementsByTagName('td');
var com3 = tr[2].getElementsByTagName('td');

var com =[com1,com2,com3];
var i,j;

function paixu(arr) {
	for ( i = 1 ; i<=3; i++ )
	{
		for ( j=2;j>=1;j--)
		{
			var a = arr[j][0].innerHTML;
			var b = arr[j-1][0].innerHTML;

			var c = arr[j][1].innerHTML;
			var d = arr[j-1][1].innerHTML;

			var e = arr[j][2].innerHTML;
			var f = arr[j-1][2].innerHTML;

			if (a<b)
			{
				arr[j][0].innerHTML = b;
				arr[j-1][0].innerHTML = a;

				arr[j][1].innerHTML = d;
				arr[j-1][1].innerHTML = c;

				arr[j][2].innerHTML = f;
				arr[j-1][2].innerHTML = e;
			}
		}
	}
	return arr;
}
com=paixu(com);

tr[0].getElementsByTagName('td')[0].innerHTML=com[0][0].innerHTML;
tr[1].getElementsByTagName('td')[0].innerHTML=com[1][0].innerHTML;
tr[2].getElementsByTagName('td')[0].innerHTML=com[2][0].innerHTML;
}

//点击Last name
var chuli1 = function ()
{
	//选择todo中三列
var staff = document.getElementById("staff");
var tbody = staff.getElementsByTagName('tbody');
var tr = tbody[0].getElementsByTagName('tr');

var com1 = tr[0].getElementsByTagName('td');
var com2 = tr[1].getElementsByTagName('td');
var com3 = tr[2].getElementsByTagName('td');

var com =[com1,com2,com3];
var i,j;

function paixu(arr) {
	for ( i = 1 ; i<=3; i++ )
	{
		for ( j=2;j>=1;j--)
		{
			var a = arr[j][0].innerHTML;
			var b = arr[j-1][0].innerHTML;

			var c = arr[j][1].innerHTML;
			var d = arr[j-1][1].innerHTML;

			var e = arr[j][2].innerHTML;
			var f = arr[j-1][2].innerHTML;

			if (c<d)
			{
				arr[j][0].innerHTML = b;
				arr[j-1][0].innerHTML = a;

				arr[j][1].innerHTML = d;
				arr[j-1][1].innerHTML = c;

				arr[j][2].innerHTML = f;
				arr[j-1][2].innerHTML = e;
			}
		}
	}
	return arr;
}
com=paixu(com);

tr[0].getElementsByTagName('td')[1].innerHTML=com[0][1].innerHTML;
tr[1].getElementsByTagName('td')[1].innerHTML=com[1][1].innerHTML;
tr[2].getElementsByTagName('td')[1].innerHTML=com[2][1].innerHTML;
}

//点击Latest checkin
var chuli2 = function ()
{
	//选择todo中三列
var staff = document.getElementById("staff");
var tbody = staff.getElementsByTagName('tbody');
var tr = tbody[0].getElementsByTagName('tr');

var com1 = tr[0].getElementsByTagName('td');
var com2 = tr[1].getElementsByTagName('td');
var com3 = tr[2].getElementsByTagName('td');

var com =[com1,com2,com3];
var i,j;

function paixu(arr) {
	for ( i = 1 ; i<=3; i++ )
	{
		for ( j=2;j>=1;j--)
		{
			var a = arr[j][0].innerHTML;
			var b = arr[j-1][0].innerHTML;

			var c = arr[j][1].innerHTML;
			var d = arr[j-1][1].innerHTML;

			var e = arr[j][2].innerHTML;
			var f = arr[j-1][2].innerHTML;

			if (e<f)
			{
				arr[j][0].innerHTML = b;
				arr[j-1][0].innerHTML = a;

				arr[j][1].innerHTML = d;
				arr[j-1][1].innerHTML = c;

				arr[j][2].innerHTML = f;
				arr[j-1][2].innerHTML = e;
			}
		}
	}
	return arr;
}
com=paixu(com);

tr[0].getElementsByTagName('td')[2].innerHTML=com[0][2].innerHTML;
tr[1].getElementsByTagName('td')[2].innerHTML=com[1][2].innerHTML;
tr[2].getElementsByTagName('td')[2].innerHTML=com[2][2].innerHTML;
}

//点击todo的某一栏
var todo = document.getElementById("todo");
var thead = todo.getElementsByTagName('thead');
var what = thead[0].getElementsByTagName('th');    

what[0].onclick = handle0;
what[1].onclick = handle1;
what[2].onclick = handle2;

//点击staff的某一栏
var staff = document.getElementById("staff");
var thead1 = staff.getElementsByTagName('thead');
var what1 = thead1[0].getElementsByTagName('th');    

what1[0].onclick = chuli0;
what1[1].onclick = chuli1;
what1[2].onclick = chuli2;
}


