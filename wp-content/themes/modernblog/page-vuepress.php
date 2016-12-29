<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Modern_Blog
 */

get_header(); ?>

<div id="app">
	<md-whiteframe md-elevation="2">
    <md-toolbar>
      <h1 class="md-title">VuePress</h1>
    </md-toolbar>
  </md-whiteframe>


  <md-layout md-gutter class="main-content">
    <md-layout md-flex="35" class="dashboard-menu">
			<md-layout md-column>
				<router-link to="/foo">Go to Foo</router-link>
		    <router-link to="/bar">Go to Bar</router-link>
			<!-- <md-list>
				<md-list-item class="menu__top-level">
					<span class="md-body-2">Posts</span>
					<md-list-expand>
						<md-list>
							<md-list-item v-for="post in posts" :key="post.id">
								<span class="">{{post.title.rendered}}</span>
							</md-list-item>
						</md-list>
					</md-list-expand>
				</md-list-item>

				<md-list-item class="menu__top-level">
					<span class="md-body-2">Pages</span>
					<md-list-expand>
						<md-list>
							<md-list-item v-for="page in pages" :key="page.id">
								<span class="">{{page.title.rendered}}</span>
							</md-list-item>
						</md-list>
					</md-list-expand>
				</md-list-item>
			</md-list> -->

			</md-layout>
		</md-layout>



		<md-layout md-flex="65">
			<md-layout md-column>
			<div>
			<router-view></router-view>
				<!-- <md-button class="md-raised md-primary"  @click="addPost">Add Post</md-button>
						<child></child>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam non aut enim nemo sunt, sapiente laborum architecto doloremque dolores hic sequi optio vero dolore et laboriosam, culpa aliquam. Hic, ex velit error. Consectetur, voluptas, eveniet, debitis, voluptate officiis ad ab dolorem error vero laborum voluptatem dicta delectus id provident doloremque.</p> -->
			</div>
		</md-layout>
		</md-layout>

	</md-layout>



</div>


<template id="router">
	<div class="test-here">
		<h1>TEST COMPONENT</h1>
		{{testData}}
	</div>
</template>
<?php
get_footer();
