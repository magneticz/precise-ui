import { TableProps, TableCardRendererEvent, TableRowEvent } from '../Table';

/**
 * Custom card renderer for event.
 */
export interface AccordionTableCardRendererEvent<T> extends TableCardRendererEvent<T> {
  /**
   * Determines if details is open for the card.
   */
  open: boolean;
}

export interface AccordionDetailsRenderEvent<T> {
  /**
   * The index of the row to render details for.
   */
  index: number;
  /**
   * The associated data entry to render the details for.
   */
  data: T;
}

export interface AccordionTableChangeEvent<T> {
  /**
   * The index of the row that was clicked.
   */
  selectedIndex: number | Array<number>;
  /**
   * The index of the row that was previously expanded.
   */
  previousIndex: number | Array<number>;
  /**
   * The associated data row, if any.
   */
  data: T;
}

export interface AccordionTableProps<T> extends TableProps<T> {
  /**
   * The currently selected index - used in the controlled mode.
   */
  selectedIndex?: number | Array<number>;
  /**
   * Renders the details given at the notified data.
   */
  detailsRenderer(e: AccordionDetailsRenderEvent<T>): React.ReactChild;
  /**
   * Notification callback if the selected content index should change.
   */
  onChange?(e: AccordionTableChangeEvent<T>): void;
  /**
   * Specifies to toggle only on the arrow, not on the row.
   */
  arrowToggle?: boolean;
  /**
   * Custom card renderer for component for `AccordionTableMode.card` mode.
   */
  cardRenderer?(e: AccordionTableCardRendererEvent<T>): React.ReactChild;
  /**
   * Label for button 'Open' in card view.
   */
  openLabel?: string;
  /**
   * Label for button 'Close' in card view.
   */
  closeLabel?: string;
  /**
   * This attribute indicates that multiple rows can be expanded.
   * If it is not specified, then only one row can be expanded at a time.
   * Default value is `false`.
   */
  multiple?: boolean;
}

export interface AccordionTableRowEvent<T> extends TableRowEvent<T> {
  active?: boolean;
}
