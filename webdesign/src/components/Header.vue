<template lang="pug">
  .container
    router-link(to="/", tag="a", exact) Home
    br
    router-link(to="/sample-form", tag="a") Sample Form
    br
    router-link(to="/sample-table", tag="a") Sample Table
</template>
