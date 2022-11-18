import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class ChatController extends Controller {
  @service chat;

  @action
  switchChannel(channel) {
    this.chat.openChannel(channel);
  }
}
