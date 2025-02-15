import { ETextTag } from "@/src/Entities/Text";
import { Component, ReactNode } from "react";
import Text from "@/src/Components/Text";

// Styles
import classes from "./classes.module.scss";
import classNames from "classnames";

type IProps = {
	title: string;
	icon?: ReactNode;
	className?: string;
	description: string[];
};
type IState = {};

export default class ListItem extends Component<IProps, IState> {
	public render() {
		return (
			<div className={classNames(classes["root"], this.props.className)}>
				<div className={classes["title-container"]}>
					{this.props.icon}
					<Text tag={ETextTag.P} className={classes["title"]}>
						{this.props.title}
					</Text>
				</div>

				<div className={classes["description-container"]}>
					{this.props.description.map((description, index) => (
						<Text key={index} tag={ETextTag.P} className={classes["description"]}>
							- {description}
						</Text>
					))}
				</div>
			</div>
		);
	}
}
