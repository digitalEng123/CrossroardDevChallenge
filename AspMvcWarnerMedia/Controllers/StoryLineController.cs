using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using AspMvcWarnerMedia.Models;

namespace AspMvcWarnerMedia.Controllers
{
    [RoutePrefix("api/storyLine")]
    public class StoryLineController : BaseAPIController
    {
        [HttpGet]
        [Route("getAllByTitle")]
        public HttpResponseMessage GetAllByTitle(int titleId)
        {
            var query = from o in _TitlesDb.StoryLine
                        where o.TitleId == titleId
                        select new StoryLineModel
                        {
                            Id = o.Id,
                            Type = o.Type,
                            Language = o.Language,
                            Description = o.Description,
                            TitleId = o.TitleId,
                        };

            return ToJson(query.AsEnumerable());
        }

        [HttpGet]
        [Route("getAllStoryLines")]
        public HttpResponseMessage GetAllStoryLines()
        {
            var query = from o in _TitlesDb.StoryLine
                        select new StoryLineModel
                        {
                            Id = o.Id,
                            Type = o.Type,
                            Language = o.Language,
                            Description = o.Description,
                            TitleId = o.TitleId,
                        };

            return ToJson(query.AsEnumerable());
        }
    }
}
