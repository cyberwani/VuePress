Vue.use(VueMaterial)

const wp = new WPAPI({
  endpoint: wpApiSettings.root,
  nonce: wpApiSettings.nonce
});


//
// for (let item of list) {
//   `wp.${item}()`.then(( data ) => {
//       `this.${item}` = data
//   }).catch(function( err ) {
//       // handle error
//   });
// }
// START OF VUE

document.addEventListener('DOMContentLoaded', init )

// COMPONENTS
var Child = {
  template: '#test',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
  data: function () {
    return {
      testData: 'The TESTDATA'
    }
  }
}

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
const router = new VueRouter({
  routes // short for routes: routes
})

function init() {

  var app = new Vue({
    router,

    components: {
      'child': Child
    },

    data: {
      message: 'Hello From Vue!',
      posts: null,
      pages: null
    },

    mounted() {
      this.getPosts()
      this.getPages()
    },

    methods: {
      getPosts() {
        wp.posts().then(( data ) => {
            this.posts = data
        }).catch(function( err ) {
            // handle error
        });
      },

      getPages () {
        wp.pages().then(( data ) => {
            this.pages = data
        }).catch(function( err ) {
            // handle error
        });
      },

      addPost() {
        wp.posts().create({
            // "title" and "content" are the only required properties
            title: 'Your Post Title',
            content: 'Your post content',
            // Post will be created as a draft by default if a specific "status"
            // is not specified
            status: 'publish'
        }).then(function( response ) {
            // "response" will hold all properties of your newly-created post,
            // including the unique `id` the post was assigned on creation
            console.log( response.id );
        })
      }
    }
  }).$mount('#app')
}


// document.addEventListener('DOMContentLoaded', function() {


// })
