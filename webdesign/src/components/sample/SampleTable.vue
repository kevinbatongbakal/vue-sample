<template lang="pug">
  section
    h4 Sample table
    br
    b-field(grouped='', group-multiline='')
      .field
        .control.has-icons-right
          input.input(v-model="search")
          span.icon.is-small.is-right
            i.fa.fa-lg.fa-search
      //- b-input(placeholder='Search...', type='text', icon='fa-magnify', v-model="search")
      
      b-select(v-model='perPage', :disabled='!isPaginated')
        option(value='5') 5 per page
        option(value='10') 10 per page
        option(value='25') 25 per page
        //- option(value='tableData.length')

    b-table(:data='filteredItems', :paginated='isPaginated', :per-page='perPage', :current-page.sync='currentPage', :pagination-simple='isPaginationSimple', :default-sort-direction='defaultSortDirection', default-sort='user.first_name')
      template(slot-scope='props')
        b-table-column(field='id', label='ID', width='40', sortable='', numeric='')
          | {{ props.row.id }}
        b-table-column(field='firstName', label='First Name', sortable='')
          | {{ props.row.firstName }}
        b-table-column(field='lastName', label='Last Name')
          | {{ props.row.lastName }}
        b-table-column(field='birthday', label='Birthday', sortable='', centered='')
          | {{ new Date(props.row.birthday).toLocaleDateString() }}
        b-table-column(label='Gender')
          b-icon(pack='fa', :icon="props.row.gender === 'Male' ? 'mars' : 'venus'")
          | {{ props.row.gender }}

</template>

<script>
import tableData from './testdata.json';

export default {
  data() {
    return {
      tableData,
      isPaginated: true,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      currentPage: 1,
      perPage: 10,

      search: ''
    };
  },
  computed: {
    filteredItems() {
      var self = this;
      return this.tableData.filter(function(item) {
        // filter by firstname and last name
        return (item.firstName.toLowerCase().indexOf(self.search.toLowerCase()) > -1) || 
          (item.lastName.toLowerCase().indexOf(self.search.toLowerCase()) > -1)
      });
    }
  }
};
</script>
