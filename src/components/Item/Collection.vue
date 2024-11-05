<template>
    <div>
        <table>
            <thead v-html="til">
            </thead>
            <tbody v-html="rows">
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
  data() {
    return {
        til: "<tr><th>Message Content</th></tr>",
        rows: "<tr><td>Message</td></tr>"
    };
  }
};

</script>