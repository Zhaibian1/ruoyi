import autoImport from 'unplugin-auto-import'

export default function createAutoImport() {
    return autoImport({
        imports: [
            'vue',
            'vue-router',
            {
                'vuex': ['useStore']
            }
        ],
        dts: false
    })
}
