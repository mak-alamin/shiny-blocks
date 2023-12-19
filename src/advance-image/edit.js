/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { Fragment, useEffect, useRef } from "@wordpress/element";
import {
	useBlockProps,
	MediaPlaceholder,
	MediaUpload,
	BlockControls,
} from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarItem,
} from "@wordpress/components";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {imageId} = attributes;
	
	const setImageAttributes = (media) => {
		if (!media || !media.url) {
			setAttributes({
				imageUrl: null,
				imageId: null,
				imageAlt: null,
			});
			return;
		}
		setAttributes({
			imageUrl: media.url,
			imageId: media.id,
			imageAlt: media?.alt,
		});
	};

	const mediaPreview = !!attributes.imageUrl && (
		<img src={attributes.imageUrl} />
	);

	return (
		<div {...useBlockProps()}>
			{
				<Fragment>
					<MediaPlaceholder
						accept="image/*"
						allowedTypes={["image"]}
						onSelect={setImageAttributes}
						multiple={false}
						handleUpload={true}
						mediaPreview={mediaPreview}
					></MediaPlaceholder>
				</Fragment>
			}
			{
				<Fragment>
					<BlockControls>
						<ToolbarGroup>
							<ToolbarItem>
								{() => (
									<MediaUpload
										value={imageId}
										onSelect={(media) => {
											setAttributes({
												imageUrl: media.url,
												imageId: media.id,
												imageAlt: media?.alt,
											});
										}}
										accept="image/*"
										allowedTypes={["image"]}
										render={({ open }) => (
											<ToolbarButton
												className="components-toolbar__control"
												label={__("Replace Image", "essential-blocks")}
												icon="edit"
												onClick={open}
											/>
										)}
									/>
								)}
							</ToolbarItem>
						</ToolbarGroup>
					</BlockControls>
				</Fragment>
			}
		</div>
	);
}
