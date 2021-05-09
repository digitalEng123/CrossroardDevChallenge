using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using AspMvcWarnerMedia.Models;

namespace AspMvcWarnerMedia.Controllers
{
    [RoutePrefix("api/participant")]
    public class ParticipantController : BaseAPIController
    {
        [HttpGet]
        [Route("getAllByTitle")]
        public HttpResponseMessage GetAllByTitle(int titleId)
        {
            var query = from o1 in _TitlesDb.Title
                        join o2 in _TitlesDb.TitleParticipant on o1.TitleId equals o2.TitleId
                        join o3 in _TitlesDb.Participant on o2.ParticipantId equals o3.Id
                        where o2.TitleId == titleId
                        select new TitleParticipantInfoModel
                        {
                            Id = o2.Id,
                            Name = o3.Name,
                            ParticipantType = o3.ParticipantType,
                            IsKey = o2.IsKey,
                            RoleType = o2.RoleType,
                            IsOnScreen = o2.IsOnScreen,
                            TitleId = o1.TitleId,
                            ParticipantId = o3.Id,
                        };

            return ToJson(query.AsEnumerable());
        }

        [HttpGet]
        [Route("getAllParticipants")]
        public HttpResponseMessage GetAllParticipants()
        {
            var query = from o in _TitlesDb.Participant
                        select new ParticipantModel
                        {
                            Id = o.Id,
                            Name = o.Name,
                            ParticipantType = o.ParticipantType,
                        };

            return ToJson(query.AsEnumerable());
        }
    }
}
