using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using AspMvcWarnerMedia.Models;

namespace AspMvcWarnerMedia.Controllers
{
    [RoutePrefix("api/genre")]
    public class GenreController : BaseAPIController
    {
        [HttpGet]
        [Route("getAllByTitle")]
        public HttpResponseMessage GetAllByTitle(int titleId)
        {
            var query = from o1 in _TitlesDb.Genre
                        join o2 in _TitlesDb.TitleGenre on o1.Id equals o2.GenreId
                        where o2.TitleId == titleId
                        select new GenreModel
                        {
                            Id = o1.Id,
                            Name = o1.Name,
                        };

            return ToJson(query.AsEnumerable());
        }

        [HttpGet]
        [Route("getAllGenres")]
        public HttpResponseMessage GetAllGenres()
        {
            var query = from o in _TitlesDb.Genre
                        select new GenreModel
                        {
                            Id = o.Id,
                            Name = o.Name,
                        };

            return ToJson(query.AsEnumerable());
        }
    }
}
