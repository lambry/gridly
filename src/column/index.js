import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import icon from './icon'
import edit from './edit'
import save from './save'

registerBlockType('lambry/gridly-column', {
	icon,
    title: __('Column', 'gridly'),
    description: __('Gridly columns.', 'gridly'),
	parent: ['lambry/gridly-grid'],
	category: 'layout',
	supports: {
		html: false
	},
    edit,
    save
})
