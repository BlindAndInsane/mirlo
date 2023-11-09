import { css } from "@emotion/css";
import React from "react";
import ClickToPlay from "../common/ClickToPlay";
import { Link } from "react-router-dom";
import { useArtistContext } from "state/ArtistContext";
import PurchaseOrDownloadAlbum from "components/TrackGroup/PurchaseOrDownloadAlbumModal";
import { bp } from "../../constants";

const ArtistTrackGroup: React.FC<{
  trackGroup: TrackGroup;
}> = ({ trackGroup }) => {
  const { state } = useArtistContext();

  if (!trackGroup || (!state?.artist && !trackGroup.artist)) {
    return null;
  }

  const { artist } = state ?? trackGroup;

  return (
    <div
      key={trackGroup.id}
      className={css`
        margin-bottom: 1rem;
        display: inline-block;
        max-width: 33.3%;
        flex: 33.3%;
        padding: 0 .25rem;

        &:nth-child(3n + 1) {
          border-top: 0;
          padding-right:.5rem;
          padding-left: 0rem;
        }

        &:nth-child(3n) {
          border-top: 0;
          padding-left: .5rem;
          padding-right: 0rem;
        }

        @media screen and (max-width: ${bp.medium}px) {
          max-width: 50%;
          flex: 50%;
          margin-bottom: 0.5rem;
          margin-top: 0.5rem;

          &:nth-child(odd) {
            padding-left: 0rem;
            padding-right: 0.25rem;
          }

          &:nth-child(even) {
            padding-right: 0rem;
            padding-left: 0.25rem;
          }

          button {
            padding: 0.2rem 0.4rem;
          }

          @media screen and (max-width: ${bp.small}px) {
            font-size: 0.8rem;
          }
        }
      `}
    >
      <div>
        <ClickToPlay
          image={{
            width: 400,
            height: 400,
            url: trackGroup.cover?.sizes?.[600] ?? "",
          }}
          trackGroupId={trackGroup.id}
          title={trackGroup.title}
        />

        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: top;
            width: 100%;
            padding-top: 0.5rem;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;

              a:first-child {
                font-weight: normal;
                margin-bottom: 0.4rem;
              }
            `}
          >
            <Link
              to={`/${artist?.urlSlug ?? artist?.id}/release/${
                trackGroup.urlSlug ?? trackGroup.id
              }`}
              className={css`
                text-decoration: none;
                padding-right: 0.5rem;

                :hover {
                  text-decoration: underline;
                }
              `}
            >
              {trackGroup.title}
            </Link>
            <Link to={`/${artist?.urlSlug ?? artist?.id}/`}>
              {trackGroup.artist?.name}
            </Link>
          </div>
          <PurchaseOrDownloadAlbum trackGroup={trackGroup} />
        </div>
      </div>
    </div>
  );
};

export default ArtistTrackGroup;
