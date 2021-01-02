import { __ } from '@wordpress/i18n'
import { InspectorControls, BlockControls, BlockVerticalAlignmentToolbar, InnerBlocks } from '@wordpress/block-editor'
import { PanelBody, TextControl } from '@wordpress/components'
import { mapAlignment } from '../helpers'
import './editor.scss'

export default function Edit({ attributes, setAttributes }) {
	const { colWidth, gridGap, alignItems } = attributes

    return (
        <>
            <InspectorControls>
				<PanelBody title={__('Display', 'gridly')}>
					<TextControl
						label={__('Column widths', 'gridly')}
						type="number"
						value={colWidth}
						onChange={colWidth => setAttributes({ colWidth: Number(colWidth) })}
					/>
					<TextControl
						label={__('Column spacing', 'gridly')}
						type="number"
						value={gridGap}
						onChange={gridGap => setAttributes({ gridGap: Number(gridGap) })}
					/>
                </PanelBody>
            </InspectorControls>
			<BlockControls>
				<BlockVerticalAlignmentToolbar
					value={alignItems}
					onChange={alignItems => setAttributes({ alignItems })}
				/>
			</BlockControls>
			<div className="gridly" style={{
				'--gridly-grid-gap': `${gridGap}px`,
				'--gridly-col-width': `${colWidth}px`,
				'--gridly-align-items': `${mapAlignment(alignItems)}`,
			}}>
				<InnerBlocks template={[['lambry/gridly-column']]} allowedBlocks={['lambry/gridly-column']} />
			</div>
        </>
    )
}
