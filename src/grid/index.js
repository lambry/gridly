import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import attrs from './attrs'
import icon from './icon'
import edit from './edit'
import save from './save'

registerBlockType('lambry/gridly-grid', {
    icon,
    title: __('Grid', 'gridly'),
    description: __('Gridly grid.', 'gridly'),
	attributes: attrs,
	category: 'layout',
	supports: {
		align: true,
		html: false
	},
    edit,
    save
})
