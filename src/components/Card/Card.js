/** @jsx jsx */
import { jsx } from "theme-ui";
import c from "config";
import React from "react";
import { useStoreActions } from 'easy-peasy';

import CardTitle from "./CardTitle";
import CardLink from "./CardLink";
import CardTags from "./CardTags";
import CardTagAngebote from "./CardTagsAngebote";
import CardTagTypen from "./CardTagsTypen";
import CardTagZielgruppe from "./CardTagsZielgruppe";
import CardDescription from "./CardDescription";
import Toggle from 'components/Toggle';

export default (p) => {
  const { data } = p;
  if (data) {}
  const { properties } = data;
  const {autoid, isFaved} = properties;
  const setFav = useStoreActions((a) => a.setFav);
  return (
    <>
      {data && (
        <>
          {c.detail.map((block, i) => {
            switch (block.component) {
              case "title":
                return (
                  <>
                    <CardTitle key={`card-title-key-${i}`} size="responsive">
                      {properties[block.id]}
                    </CardTitle>
                    <>
                      <Toggle
                        isFaved={isFaved}
                        autoId={autoid}
                        onToggle={setFav}
                        type="detail"
                      />
                    </>
                  </>
                );
              case "description":
                return (
                  <CardDescription
                    key={`card-desc-key-${i}`}
                    label={block.label}
                    content={properties[block.id]}
                  />
                );
              case "link":
                return (
                  <CardLink
                    ismail="false"
                    key={`card-link-key-${i}`}
                    label={block.label}
                    content={"Webseite"}
                    url={properties[block.id]}
                  />
                );
              case "tags":
                return (
                  <CardTags
                    ismail="true"
                    key={`card-link-key-${i}`}
                    label={block.label}
                    tags={properties[block.id]}
                  />
                );
                case "tags_zielgruppe":
                  return (
                    <CardTagZielgruppe
                      ismail="true"
                      key={`card-link-key-${i}`}
                      label={block.label}
                      tags={properties[block.id]}
                    />
                  );
                  case "tags_angebote":
                    return (
                      <CardTagAngebote
                        ismail="true"
                        key={`card-link-key-${i}`}
                        label={block.label}
                        tags={properties[block.id]}
                      />
                    );
                    case "tags_typen":
                      return (
                        <CardTagTypen
                          ismail="true"
                          key={`card-link-key-${i}`}
                          label={block.label}
                          tags={properties[block.id]}
                        />
                      );
              default:
                return null;
            }
          })}
        </>
      )}
    </>
  );
};
