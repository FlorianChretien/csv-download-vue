<template>
    <a :download="downloadName" :href="downloadUrl" :disabled="this.data.length === 0">
        <slot>
            <i class="fa fa-file-excel-o" aria-hidden="true"></i>
        </slot>
    </a>
</template>

<script>
    import json2csv from 'json2csv';
    export default {
        props: {
            fields: undefined,
            data: undefined,
            downloadName: {
                default: 'export.csv'
            }
        },
        computed: {
            downloadUrl() {
                const fields = this.fields;
                const csv = json2csv.parse(this.data, { fields, delimiter: ';', withBOM: true });
                return this.data.length > 0 ? "data:text/csv,"+encodeURIComponent(csv) : 'javascript:void(0);';
            }
        }
    }
</script>
