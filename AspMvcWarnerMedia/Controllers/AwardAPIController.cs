using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using AspMvcWarnerMedia.Models;

namespace AspMvcWarnerMedia.Controllers
{
    [RoutePrefix("api/award")]
    public class AwardAPIController : BaseAPIController
    {
        [HttpGet]
        [Route("getAllByTitle")]
        public HttpResponseMessage GetAllByTitle(int titleId)
        {
            var query = from o in _TitlesDb.Award
                        where o.TitleId == titleId
                        select new AwardModel
                        {
                            Id = o.Id,
                            AwardWon = o.AwardWon,
                            AwardYear = o.AwardYear,
                            Award = o.Award1,
                            AwardCompany = o.AwardCompany,
                            TitleId = o.TitleId,
                        };

            return ToJson(query.AsEnumerable());
        }

        [HttpGet]
        [Route("getAllAwards")]
        public HttpResponseMessage GetAllAwards()
        {
            var query = from o in _TitlesDb.Award
                        select new AwardModel
                        {
                            Id = o.Id,
                            AwardWon = o.AwardWon,
                            AwardYear = o.AwardYear,
                            Award = o.Award1,
                            AwardCompany = o.AwardCompany,
                            TitleId = o.TitleId,
                        };

            return ToJson(query.AsEnumerable());
        }
    }
}
