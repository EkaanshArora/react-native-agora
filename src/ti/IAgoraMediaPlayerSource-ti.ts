/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const IMediaPlayerSourceObserver = t.iface([], {
  "onPlayerSourceStateChanged": t.opt(t.func("void", t.param("state", "MediaPlayerState"), t.param("ec", "MediaPlayerError"))),
  "onPositionChanged": t.opt(t.func("void", t.param("positionMs", "number"))),
  "onPlayerEvent": t.opt(t.func("void", t.param("eventCode", "MediaPlayerEvent"), t.param("elapsedTime", "number"), t.param("message", "string"))),
  "onMetaData": t.opt(t.func("void", t.param("data", "Uint8Array"), t.param("length", "number"))),
  "onPlayBufferUpdated": t.opt(t.func("void", t.param("playCachedBuffer", "number"))),
  "onPreloadEvent": t.opt(t.func("void", t.param("src", "string"), t.param("event", "PlayerPreloadEvent"))),
  "onCompleted": t.opt(t.func("void")),
  "onAgoraCDNTokenWillExpire": t.opt(t.func("void")),
  "onPlayerSrcInfoChanged": t.opt(t.func("void", t.param("from", "SrcInfo"), t.param("to", "SrcInfo"))),
  "onPlayerInfoUpdated": t.opt(t.func("void", t.param("info", "PlayerUpdatedInfo"))),
  "onAudioVolumeIndication": t.opt(t.func("void", t.param("volume", "number"))),
});

const exportedTypeSuite: t.ITypeSuite = {
  IMediaPlayerSourceObserver,
};
export default exportedTypeSuite;
