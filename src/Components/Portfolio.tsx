import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { AlbumsContainer } from "./AlbumsContainer";
import { title } from "process";
import acbanner from "../banner7.jpg";
import * as firebase from "firebase/app";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import useFirestore from "../Hooks/useFirestore";
import { projectStorage, projectFirestore } from "../Firestore/FirestoreConfig";
import { Entity } from "../Hooks/useFirestore";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useContext } from "react";
import { LightboxCtx } from "./Lightbox/LightboxContext";
import "firebase/firestore";

// This only needs to be imported once in your app

export interface ImageUrl {
  small: string;
  medium: string;
  large: string;
}
export interface Album {
  id: string;
  title: string;
  coverImages: ImageUrl;
  imgUrls: Array<ImageUrl>;
}
export interface AlbumsCollection extends Entity {
  category: string;
  albums: Array<Album>;
}

export const Portfolio = () => {
  const { documents, isLoading } =
    useFirestore<AlbumsCollection>("PortfolioImages");

  const context = useContext(LightboxCtx);

  //const collectionRef = projectFirestore.collection("PortfolioImages");

  // async function getUrl(imageRef: firebase.default.storage.Reference) {
  //   const url = await imageRef.getDownloadURL();
  //   return url;
  // }

  const handleAlbumSelected = (album: Album) => {
    let url = album.imgUrls.map((imgUrl) => {
      return imgUrl.medium;
    });
    context.dispatch({ type: "openLightbox", payload: [...url] });
  };

  return (
    <>
      <Grid container justify="center">
        <Grid item justify="center" container>
          <Grid className="acbanner-container" direction="column" container>
            <Grid item xs={12} className="banner-text">
              <Container>
                <Grid justify="center" container>
                  <Grid justify="center" container>
                    <Grid item xs={12}>
                      <Typography
                        variant="h3"
                        component="h3"
                        style={{ textAlign: "center" }}
                      >
                        Completed projects
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Divider
                        className="divider-break"
                        orientation="horizontal"
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={12} lg={7}>
                    <Typography
                      variant="h5"
                      component="h5"
                      style={{ textAlign: "center" }}
                      gutterBottom
                      className="text-light"
                    >
                      We'd love to hear from you! If you have any questions
                      regarding a project don't hesitate to contact us through
                      one of the listed options
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ minHeight: "400px" }}>
          {!isLoading ? (
            Array.from(
              documents
                .reduce<Map<string, AlbumsCollection[]>>(
                  (acc, obj): Map<string, AlbumsCollection[]> => {
                    const collection = acc.get(obj.category);
                    if (!collection) {
                      acc.set(obj.category, [obj]);
                    } else {
                      collection.push(obj);
                    }

                    return acc;
                  },
                  new Map()
                )
                .values()
            ).map((val, index) => {
              return (
                <Grid
                  key={val[0].id}
                  className={`${(index + 1) % 2 != 0 ? "paper-color" : ""}`}
                  item
                  style={{ padding: "72px 0 0px" }}
                >
                  <Container>
                    <AlbumsContainer
                      categorie={val}
                      onAlbumSelected={handleAlbumSelected}
                    />
                  </Container>
                </Grid>
              );
            })
          ) : (
            <Grid container justify="center">
              <Grid item>
                <Container>
                  <CircularProgress value={100} />
                </Container>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};
