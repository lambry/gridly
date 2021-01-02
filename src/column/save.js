import { InnerBlocks } from '@wordpress/block-editor'

export default function Save() {
	return (
		<div className="gridly-column">
			<InnerBlocks.Content />
		</div>
	)
}
