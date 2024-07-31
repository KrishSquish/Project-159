AFRAME.registerComponent("info-banner", {
    schema: {
      itemId: { default: "", type: "string" },
    },
    update: function () {
      this.createBanner();
    },
    
    createBanner: function () {
      postersInfo = {
        "stranger-things": {
          banner_url: "./assets/posters/strangerthingsImage.jpg",
          title: "Stranger Things",
          released_year: "2016",
          description:
            "Stranger Things is an American science fiction drama television series created by the Duffer Brothers for Netflix. Set in the 1980s, the show revolves around the residents of the fictional small town of Hawkins, Indiana. They grapple with strange occurrences tied to a hostile alternate dimension known as the Upside Down. ",
        },
        omori: {
          banner_url: "./assets/posters/omoriImage.png",
          title: "OMORI",
          released_year: "2020",
          description:"Omori is a 2020 role-playing video game developed and published by indie studio Omocat. The player controls a mute hikikomori teenage boy named Sunny and his dream world alter-ego Omori. "
        },
        danganronpa: {
          banner_url: "./assets/posters/danganronpaImage.jpg",
          title: "Danganronpa",
          released_year: "2010",
          description:
        "Danganronpa (ダンガンロンパ) is a Japanese visual novel franchise created by Kazutaka Kodaka and published by Spike Chunsoft since 2010. Currently the franchise includes four console games and two major anime series, with associated manga, novels and stage play spin-offs and adaptations. "        
        },
        pokemon: {
          banner_url: "./assets/posters/pokemonImage.jpg",
          title: "Pokemon",
          released_year: "1996",
          description:
            "Pokémon is a Japanese media franchise consisting of video games, animated series and films, a trading card game, and other related media. The franchise takes place in a shared universe in which humans co-exist with creatures known as Pokémon, a large variety of species endowed with special powers. ",
        },
      };
      const { itemId } = this.data;
  
      const fadeBackgroundEl = document.querySelector("#fadeBackground");
  
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("id", `${itemId}-banner`);
  
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
      });
  
      entityEl.setAttribute("material", { color: "#000" });
      entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
  
      const item = postersInfo[itemId];
  
      const imageEl = this.createImageEl(item);
      const titleEl = this.createTitleEl(item);
      const descriptionEl = this.createDescriptionEl(item);
  
      entityEl.appendChild(imageEl);
      entityEl.appendChild(titleEl);
      entityEl.appendChild(descriptionEl);
  
      fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.85,
        height: 0.4,
      });
      entityEl.setAttribute("material", { src: item.banner_url });
      entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
      return entityEl;
    },
    createTitleEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 1.2,
        height: 2,
        color: "#fff",
        value: `${item.title} (${item.released_year})`,
      });
      entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
      return entityEl;
    },
    createDescriptionEl: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("text", {
        shader: "msdf",
        anchor: "left",
        font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
        width: 0.75,
        height: 2,
        color: "#fff",
        wrapCount: "40",
        value: item.description,
      });
      entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
      return entityEl;
    },
  });
  