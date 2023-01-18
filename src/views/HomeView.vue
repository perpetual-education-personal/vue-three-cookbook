<template>
	<h1>Toggle body class</h1>

	<p>
		An example of toggling a body class by watching a reactive property for changes and using the web api and
		element.classList.toggle() method.
	</p>

	<p>Also an example of a computed property on the header element.</p>

	<p>Also an example of a data-attribute on the html element.</p>

	<p>An example of a { className: reactiveProperty } binding.</p>

	<ol>
		<li>
			The binding is the least code but can't get out of the app to the body element. Same caveat with the computed
			property.
		</li>

		<li>
			The body and html examples involve a combo of reactive property, a watcher, and a DOM manipulation. Some might
			say it's not the Vue way - but also, it does the job just fine.
		</li>

		<li>
			These are all just great. However, what about ditching the body and #app layers and creating a stand-in root
			element like this? →
			[-html-structure-experiments](https://github.com/perpetual-education/vue-three-cookbook/tree/html-structure-experiments)
		</li>
	</ol>
</template>
