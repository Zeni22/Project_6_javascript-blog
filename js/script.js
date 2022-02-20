{
  'use strict';
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author',
    optTagsListSelector = '.list.tags',
    optCloudClassCount = 5 ,
    optCloudClassPrefix = 'tag-size-' ;

  // ARTICLE TITLES
  const  generateTitleLinks = function (customSelector = '') {

    const titleList = document.querySelector(optTitleListSelector);       /* [DONE] make a new constant titleList */
    titleList.innerHTML = '';                                             /* [DONE] remove contents of titleList */

    const articles = document.querySelectorAll(optArticleSelector + customSelector);       /* [DONE] find all the articles and save them to variable: articles */
    let html = '';

    for (let article of articles) {                                       /* [DONE] for each article: */
      const articleId = article.getAttribute('id');                       /* [DONE] get the article id */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;   /* [DONE] find the title element and  get the title from the title element */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';   /* [DONE] create HTML of the link */

      html = html + linkHTML;                                             /* [DONE] insert link into html variable */
    }

    titleList.innerHTML = html;                                           /* [DONE] insert link into titleList */
  };
  generateTitleLinks();

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;

    const activeLinks = document.querySelectorAll('.titles a.active');      /*[DONE]remove class 'active' from all article links  */
    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    clickedElement.classList.add('active');                                 /*[DONE] add class 'active' to the clicked link */

    const activeArticles = document.querySelectorAll('.post.active');       /* [DONE] remove class 'active' from all articles */
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    const articleSelector = clickedElement.getAttribute('href');            /* [DONE] get 'href' attribute from the clicked link */
    const targetArticle = document.querySelector(articleSelector);          /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    targetArticle.classList.add('active');                                 /* [DONE] add class 'active' to the correct article */
  };

  const addClickListenersToTitles = function(){
    const links = document.querySelectorAll('.titles a');                 /* find all links to titles */
    for (let link of links) {                                             /* START LOOP: for each link */
      link.addEventListener('click', titleClickHandler);                  /* add titleClickHandler as event listener for that link */
    }                                                                     /* END LOOP: for each link */
  };
  addClickListenersToTitles();

  // TAGS
  const calculateTagsParams = function(tags) {                            /*Finding highest and smallest number of appereances for tags  */
    const params = {max: 0, min: 999999,} ;

    for (let tag in tags) {
      console.log(tag + 'is used ' + tags[tag] + ' times ');
      params.max = Math.max(tags[tag], params.max);
      params.min = Math.min(tags[tag], params.min);
    }
    return params;
  };

  const calculateTagClass = function (count, params) {
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor(percentage * (optCloudClassCount - 1) + 1);
    return optCloudClassPrefix + classNumber;
  };


  const generateTags = function() {
    let allTags = {};                                                     /* [TagsRightColumAnd Counting] create a new variable allTags with an empty object*/
    const articles = document.querySelectorAll(optArticleSelector);       /* [DONE]  find all articles */

    for (let article of articles) {                                       /* [DONE]  START LOOP: for every article: */
      const tagWrapper = article.querySelector(optArticleTagsSelector);   /* [DONE]  find tags wrapper */
      const articleTags = article.getAttribute('data-tags');              /* [DONE]  get tags from data-tags attribute */
      const articleTagsArray = articleTags.split(' ');                    /* [DONE]  split tags into array */
      let html = '';                                                      /* [DONE]  make html variable with empty string */

      for (let tag of articleTagsArray){                                  /* [DONE]  START LOOP: for each tag */
        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';           /* [DONE]  generate HTML of the link */
        html = html + linkHTML;                                            /* [DONE]  add generated code to html variable */
        if(!allTags[tag]) {                                                /* [TagsRightColum] check if this link is NOT already in allTags */
          allTags[tag] = 1;                                                /* [TagsRightColum] add tag to allTags object */
        } else {
          allTags[tag]++;
        }
      }
      tagWrapper.innerHTML = html;                                         /* [DONE]  insert HTML of all the links into the tags wrapper */
    }

    const tagList = document.querySelector(optTagsListSelector);          /* [TagsRightColum] find list of tags in right column */
    console.log('Tag List:', tagList);
    const tagsParams = calculateTagsParams(allTags);                      /* [TagsRightColum] create variable for all links HTML code */
    console.log('tagsParams:', tagsParams);

    let allTagsHTML = '';                                                 /* [CountingTags] create variable for all links HTML code */

    for(let tag in allTags){                                             /* [CountingTags] START LOOP: for each tag in allTags: */
      allTagsHTML += '<li><a href="#tag-' + tag + '" class="' + calculateTagClass(allTags[tag], tagsParams) + '"><span>' + tag + ' ' + '</span></a></li>';  /* [CountingTags] generate code of a link and add it to allTagsHTML */
    }
    console.log('All Tags as HTML ', allTagsHTML);
    tagList.innerHTML = allTagsHTML;                                     /*[CountingTags] add HTML from allTagsHTML to tagList */
  };
  generateTags();

  const tagClickHandler = function (event){
    event.preventDefault();                                                                       /* [DONE]  prevent default action for this event */
    const clickedElement = this;                                                                  /* [DONE]  make new constant named "clickedElement" and give it the value of "this" */
    const href = clickedElement.getAttribute('href');                                            /* [DONE]  make a new constant "href" and read the attribute "href" of the clicked element */
    const tag = href.replace('#tag-', '');                                                       /* [DONE] make a new constant "tag" and extract tag from the "href" constant*/

    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');                 /* [DONE] find all tag links with class active */
    for (let activeTagLink of activeTagLinks){
      activeTagLink.classList.remove('active');                                                 /* [DONE remove class active from  all tag links with class active */
    }

    const tagLinksEqualClickedElements = document.querySelectorAll('a[href="' + href + '"]');   /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
    for (let tagLinksEqualClickedElement of tagLinksEqualClickedElements){
      tagLinksEqualClickedElement.classList.add('active');                                      /* [DONE] add class active to all tag links with "href" attribute equal to the "href" constant */
    }

    generateTitleLinks('[data-tags~="' + tag + '"]');                                            /* execute function "generateTitleLinks" with article selector as argument*/
  };

  const addClickListenersToTags = function(){
    let links = document.querySelectorAll('a[href^="#tag-"]');                            /* [DONE] find all links to tags*/
    for (let link of links) {                                                                 /* [DONE] START LOOP: for each link */
      link.addEventListener('click', tagClickHandler);                                        /* [DONE] add tagClickHandler as event listener for that link */
    }                                                                                         /* [DONE] END LOOP: for each link */
  };
  addClickListenersToTags();

  //AUTHORS
  const generateAuthors = function() {
    const articles = document.querySelectorAll(optArticleSelector);                            /* [DONE]  find all articles */

    for (let article of articles) {                                                            /* [DONE]  START LOOP: for every article: */
      const authorWrapper = article.querySelector(optArticleAuthorSelector);                   /* [DONE]  find author wrapper */
      const articleAuthors = article.getAttribute('data-author');                              /* [DONE]  get authors from data-author attribute */
      let html = '';                                                                           /* [DONE]  make html variable with empty string */
      const linkHTML = '<li><a href="#author-' + articleAuthors + '"><span>' + articleAuthors + '</span></a></li>';      /* [DONE]  generate HTML of the link */                                                             /* [DONE]  make html variable with empty string */

      html = html + linkHTML;                                                                   /* [DONE]  add generated code to html variable */

      authorWrapper.innerHTML = html;                                                           /* [DONE]  insert HTML of all the links into the author wrapper */
    }
  };
  generateAuthors();

  const authorClickHandler = function (event){
    event.preventDefault();                                                                   /* [DONE]  prevent default action for this event */
    const clickedElement = this;                                                              /* [DONE]  make new constant named "clickedElement" and give it the value of "this" */
    const href = clickedElement.getAttribute('href');                                         /* [DONE]  make a new constant "href" and read the attribute "href" of the clicked element */
    const author = href.replace('#author-', '');                                              /* [DONE] make a new constant "author" and extract author from the "href" constant*/

    const activeAuthorLinks = document.querySelectorAll('a.active[href^="#author-"]');        /* [DONE] find all tag links with class active */
    for (let activeAuthorLink of activeAuthorLinks){
      activeAuthorLink.classList.remove('active');                                            /* [DONE remove class active from  all tauthor links with class active */
    }

    const authorLinksEqualClickedElements = document.querySelectorAll('a[href="' + href + '"]');   /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
    for (let authorLinksEqualClickedElement of authorLinksEqualClickedElements){
      authorLinksEqualClickedElement.classList.add('active');                                  /* [DONE] add class active to all author links with "href" attribute equal to the "href" constant */
    }
    generateTitleLinks('[data-author="' + author + '"]');                                      /* execute function "generateTitleLinks" with article selector as argument*/
    addClickListenersToTitles();
  };

  const addClickListenersToAuthors = function(){
    const links = document.querySelectorAll('.post-author a');                                /* [DONE] find all links to authors */
    for (let link of links) {                                                                 /* [DONE] START LOOP: for each link */
      link.addEventListener('click', authorClickHandler);                                     /* [DONE] add tagClickHandler as event listener for that link */
    }                                                                                         /* [DONE] END LOOP: for each link */
  };
  addClickListenersToAuthors();
}



