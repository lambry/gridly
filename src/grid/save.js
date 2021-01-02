import { InnerBlocks } from '@wordpress/block-editor'
import { mapAlignment } from '../helpers'

export default function Save({ attributes }) {
	const { colWidth, gridGap, alignItems } = attributes

   return (
	   <div className="gridly" style={{
			gridGap,
			display: 'grid',
			gridTemplateColumns: `repeat(auto-fit, minmax(${colWidth}px, 1fr))`,
			alignItems: mapAlignment(alignItems)
		}}>
		   <InnerBlocks.Content />
	   </div>
   )
}
