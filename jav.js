let mainNav = document.getElementById('js-menu');

let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function()
{
	mainNav.classList.toggle('active');
});

function validate()
{
	if(document.form1.name.value.length < 1)
	{
		alert("Please Enter Your Name First.");
		return false;
	}
	if(document.form1.wish.value.length < 5)
	{
		alert("Please Enter Your Wish.");
		return false;
	}
	if(document.form1.hope.value.length < 5)
	{
		alert("Please Enter Your Hopes.");
		return false;
	}
	return true;
}
