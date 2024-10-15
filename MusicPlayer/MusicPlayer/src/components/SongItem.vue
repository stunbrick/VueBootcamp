<template>
  <li
      class="flex justify-between items-center p-3 pl-6 cursor-pointer transition duration-300 hover:bg-gray-50" :id="`song-id-${song.docID}`">
  >
    <div>
      <RouterLink :to="{ name: 'song', params: { id: song.docID } }" class="font-bold block text-gray-600 example">{{ song.modified_name }}</RouterLink>
      <span class="text-gray-500 text-sm">{{ song.display_name }}</span>
    </div>

    <div class="text-gray-600 text-lg">
      <RouterLink :to="{ name: 'song', params: { id: song.docID }, hash: '#comments' }"
      v-slot="{ navigate }"
      >
              <span class="comments">
                <i class="fa fa-comments text-gray-600"></i>
                {{ song.comment_count }}
              </span>
      </RouterLink>
    </div>
  </li>
</template>

<script>
  export default {
    name: 'SongItem',
    props: ['song'],
  };
</script>