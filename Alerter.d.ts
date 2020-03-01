import { Alert } from "./Alert";

/** @description
 * The Acrobat multimedia plug-in displays error alerts under various conditions such as a missing media file.
 * JavaScript code can customize these alerts, either for an entire document or for an individual media player.
 *
 * In an alert situation, the internal function app.media.alert is called with parameters containing information about
 * the alert. The app.media.alert method handles the alert by looking for alerter objects and calling their dispatch
 * methods, in this order:
 *
 *   * args.alerter
 *   * doc.media.alerter
 *   * doc.media.stockAlerter
 *
 * To handle alerts for a specific player, provide an alerter object in args.alerter when you call
 * app.media.createPlayer or app.media.openPlayer.
 *
 * To handle alerts for an entire document, set doc.media.alerter to an alerter object.
 *
 * All alerts can be suppressed for a player or document by setting args.alerter or doc.media.alerter to null.
 *
 * doc.media.stockAlerter provides the default alerts that are used if a custom alerter is not specified. This property
 * is initialized automatically by app.media.alert. Normally, doc.media.stockAlerter would not be referenced in
 * developer code.
 */
export interface Alerter{
    dispatch(alert:Alert): boolean
}